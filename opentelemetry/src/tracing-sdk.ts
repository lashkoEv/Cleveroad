import { SimpleSpanProcessor } from '@opentelemetry/sdk-trace-base';
import { NodeSDK } from '@opentelemetry/sdk-node';
import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
import { ExpressInstrumentation } from '@opentelemetry/instrumentation-express';
import { NestInstrumentation } from '@opentelemetry/instrumentation-nestjs-core';
import { Resource } from '@opentelemetry/resources';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';
import { JaegerExporter } from '@opentelemetry/exporter-jaeger';
import { SequelizeInstrumentation } from 'opentelemetry-instrumentation-sequelize';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-grpc';

interface IService {
    name: string;
    tracingSDK: NodeSDK;
}

const services: IService[] = [];

const startLocalTracing = async (serviceName: string, exporterEndpoint: string = 'http://localhost:14268/api/traces') => {
    const jaegerExporter = new JaegerExporter({
        endpoint: exporterEndpoint,
    });

    console.log(`[Tracing] Starting tracing for service: ${serviceName}`);

    const tracingSDK = new NodeSDK({
        resource: new Resource({
            [SemanticResourceAttributes.SERVICE_NAME]: serviceName,
        }),
        spanProcessor: new SimpleSpanProcessor(jaegerExporter),
        instrumentations: [
            new HttpInstrumentation(),
            new ExpressInstrumentation(),
            new NestInstrumentation(),
            new SequelizeInstrumentation(),
        ],
    });

    try {
        await tracingSDK.start();
        console.log(`[Tracing] Tracing started successfully for service: ${serviceName}`);
    } catch (err) {
        console.error(`[Tracing] Failed to start tracing for service: ${serviceName}`, err);
    }
};

const startTracingForSam = async (serviceName: string, exporterEndpoint: string = 'http://jaeger:4317') => {
    const existingService = services.find(service => service.name === serviceName);

    if(existingService) {
        return;
    }

    const otlpExporter = new OTLPTraceExporter({
        url: exporterEndpoint,
    });

    console.log(`[Tracing] Starting tracing for service: ${serviceName}`);

    const tracingSDK = new NodeSDK({
        resource: new Resource({
            [SemanticResourceAttributes.SERVICE_NAME]: serviceName,
        }),
        spanProcessor: new SimpleSpanProcessor(otlpExporter),
        instrumentations: [
            new HttpInstrumentation(),
            new ExpressInstrumentation(),
            new NestInstrumentation(),
            new SequelizeInstrumentation(),
        ],
    });

    try {
        tracingSDK.start();
        services.push({ name: serviceName, tracingSDK });
        console.log(`[Tracing] Tracing started successfully for service: ${serviceName}`);
    } catch (err) {
        console.error(`[Tracing] Failed to start tracing for service: ${serviceName}`, err);
    }
};

export { startLocalTracing, startTracingForSam };
