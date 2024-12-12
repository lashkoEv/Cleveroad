// // // import { NodeSDK } from '@opentelemetry/sdk-node';
// // // import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
// // // import { ExpressInstrumentation } from '@opentelemetry/instrumentation-express';
// // // import { SequelizeInstrumentation } from 'opentelemetry-instrumentation-sequelize';
// // // import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';
// // //
// // // import { ATTR_SERVICE_NAME } from '@opentelemetry/semantic-conventions';
// // // import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-grpc';
// // // import { Resource } from '@opentelemetry/resources';
// // //
// // // const sdk = new NodeSDK({
// // //   traceExporter: new OTLPTraceExporter({
// // //     url: 'http://localhost:4317',
// // //   }),
// // //   instrumentations: [
// // //     getNodeAutoInstrumentations(),
// // //     new HttpInstrumentation(),
// // //     new SequelizeInstrumentation(),
// // //     new ExpressInstrumentation(),
// // //   ],
// // //   resource: new Resource({
// // //     [ATTR_SERVICE_NAME]: 'x-api',
// // //   }),
// // // });
// // //
// // // sdk.start();
// // //
// // // process.on('SIGTERM', () => {
// // //   sdk
// // //     .shutdown()
// // //     .then(() => console.log('Tracing terminated'))
// // //     .catch((error) => console.log('Error terminating tracing', error))
// // //     .finally(() => process.exit(0));
// // // });
// // //
// // // export default sdk;
// //
// // // import {
// // //   ConsoleSpanExporter,
// // //   SimpleSpanProcessor,
// // // } from '@opentelemetry/sdk-trace-base';
// // // import { NodeSDK } from '@opentelemetry/sdk-node';
// // // import * as process from 'process';
// // // import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
// // // import { ExpressInstrumentation } from '@opentelemetry/instrumentation-express';
// // // import { NestInstrumentation } from '@opentelemetry/instrumentation-nestjs-core';
// // // import { Resource } from '@opentelemetry/resources';
// // // import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';
// // //
// // // const traceExporter = new ConsoleSpanExporter();
// // //
// // // export const otelSDK = new NodeSDK({
// // //   resource: new Resource({
// // //     [SemanticResourceAttributes.SERVICE_NAME]: 'nestjs-otel',
// // //   }),
// // //   spanProcessor: new SimpleSpanProcessor(traceExporter),
// // //   instrumentations: [
// // //     new HttpInstrumentation(),
// // //     new ExpressInstrumentation(),
// // //     new NestInstrumentation(),
// // //   ],
// // // });
// // //
// // // process.on('SIGTERM', () => {
// // //   otelSDK
// // //     .shutdown()
// // //     .then(
// // //       () => console.log('SDK shut down successfully'),
// // //       (err) => console.log('Error shutting down SDK', err),
// // //     )
// // //     .finally(() => process.exit(0));
// // // });
// //
// // import {
// //   SimpleSpanProcessor,
// // } from '@opentelemetry/sdk-trace-base';
// // import { NodeSDK } from '@opentelemetry/sdk-node';
// // import * as process from 'process';
// // import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
// // import { ExpressInstrumentation } from '@opentelemetry/instrumentation-express';
// // import { NestInstrumentation } from '@opentelemetry/instrumentation-nestjs-core';
// // import { Resource } from '@opentelemetry/resources';
// // import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';
// // import { JaegerExporter } from '@opentelemetry/exporter-jaeger';
// // import { SequelizeInstrumentation } from 'opentelemetry-instrumentation-sequelize';
// //
// // const jaegerExporter = new JaegerExporter({
// //   endpoint: 'http://localhost:14268/api/traces',
// // });
// //
// // const traceExporter = jaegerExporter;
// //
// // export const tracingSDK = new NodeSDK({
// //   resource: new Resource({
// //     [SemanticResourceAttributes.SERVICE_NAME]: 'template-nestjs-otel',
// //   }),
// //   spanProcessor: new SimpleSpanProcessor(traceExporter),
// //   instrumentations: [
// //     new HttpInstrumentation(),
// //     new ExpressInstrumentation(),
// //     new NestInstrumentation(),
// //     new SequelizeInstrumentation()
// //   ],
// // });
// //
// // process.on('SIGTERM', () => {
// //   tracingSDK
// //     .shutdown()
// //     .then(
// //       () => console.log('SDK shut down successfully'),
// //       (err) => console.log('Error shutting down SDK', err),
// //     )
// //     .finally(() => process.exit(0));
// // });
// //
// //
// //
//
//
//
//
// //
// // import { SimpleSpanProcessor } from '@opentelemetry/sdk-trace-base';
// // import { NodeSDK } from '@opentelemetry/sdk-node';
// // import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
// // import { ExpressInstrumentation } from '@opentelemetry/instrumentation-express';
// // import { NestInstrumentation } from '@opentelemetry/instrumentation-nestjs-core';
// // import { Resource } from '@opentelemetry/resources';
// // import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';
// // import { JaegerExporter } from '@opentelemetry/exporter-jaeger';
// // import { SequelizeInstrumentation } from 'opentelemetry-instrumentation-sequelize';
// //
// // const createTracingSDK = (serviceName: string, jaegerEndpoint: string = 'http://localhost:14268/api/traces') => {
// //   const jaegerExporter = new JaegerExporter({
// //     endpoint: jaegerEndpoint,
// //   });
// //
// //   return new NodeSDK({
// //     resource: new Resource({
// //       [SemanticResourceAttributes.SERVICE_NAME]: serviceName,
// //     }),
// //     spanProcessor: new SimpleSpanProcessor(jaegerExporter),
// //     instrumentations: [
// //       new HttpInstrumentation(),
// //       new ExpressInstrumentation(),
// //       new NestInstrumentation(),
// //       new SequelizeInstrumentation(),
// //     ],
// //   });
// // };
// //
// // export { createTracingSDK };
//
//
//
//
//
// //
// // import { SimpleSpanProcessor } from '@opentelemetry/sdk-trace-base';
// // import { NodeSDK } from '@opentelemetry/sdk-node';
// // import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
// // import { ExpressInstrumentation } from '@opentelemetry/instrumentation-express';
// // import { NestInstrumentation } from '@opentelemetry/instrumentation-nestjs-core';
// // import { Resource } from '@opentelemetry/resources';
// // import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';
// // import { ConsoleSpanExporter } from '@opentelemetry/sdk-trace-base';
// // import { SequelizeInstrumentation } from 'opentelemetry-instrumentation-sequelize';
// //
// // let tracingSDK: NodeSDK | null = null;
// //
// // /**
// //  * Starts the OpenTelemetry tracing SDK.
// //  *
// //  * @param serviceName - Name of the service for telemetry.
// //  */
// // export const startTracing = async (
// //   serviceName: string
// // ): Promise<void> => {
// //   if (tracingSDK) {
// //     console.log(`[Tracing] SDK is already running for service: ${serviceName}`);
// //     return;
// //   }
// //
// //   console.log(`[Tracing] Starting tracing for service: ${serviceName}`);
// //   const consoleExporter = new ConsoleSpanExporter();
// //
// //   tracingSDK = new NodeSDK({
// //     resource: new Resource({
// //       [SemanticResourceAttributes.SERVICE_NAME]: serviceName,
// //     }),
// //     spanProcessor: new SimpleSpanProcessor(consoleExporter),
// //     instrumentations: [
// //       new HttpInstrumentation(),
// //       new ExpressInstrumentation(),
// //       new NestInstrumentation(),
// //       new SequelizeInstrumentation(),
// //     ],
// //   });
// //
// //   try {
// //     await tracingSDK.start();
// //     console.log(`[Tracing] Tracing started successfully for service: ${serviceName}`);
// //   } catch (err) {
// //     console.error(`[Tracing] Failed to start tracing for service: ${serviceName}`, err);
// //   }
// //
// //   // Gracefully shut down the tracing SDK on process termination
// //   process.on('SIGTERM', async () => {
// //     if (tracingSDK) {
// //       try {
// //         await tracingSDK.shutdown();
// //         console.log(`[Tracing] SDK shut down for service: ${serviceName}`);
// //       } catch (err) {
// //         console.error(`[Tracing] Error shutting down SDK for service: ${serviceName}`, err);
// //       }
// //     }
// //   });
// // };
// //
// // /**
// //  * Stops the OpenTelemetry tracing SDK.
// //  */
// // export const stopTracing = async (): Promise<void> => {
// //   if (!tracingSDK) {
// //     console.log('[Tracing] No tracing SDK is running.');
// //     return;
// //   }
// //
// //   try {
// //     await tracingSDK.shutdown();
// //     console.log('[Tracing] Tracing SDK shut down successfully.');
// //   } catch (err) {
// //     console.error('[Tracing] Error shutting down tracing SDK:', err);
// //   } finally {
// //     tracingSDK = null;
// //   }
// // };
//
//
//
//
//
//
//
//
//
//
//
//
// import { SimpleSpanProcessor } from '@opentelemetry/sdk-trace-base';
// import { NodeSDK } from '@opentelemetry/sdk-node';
// import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
// import { ExpressInstrumentation } from '@opentelemetry/instrumentation-express';
// import { NestInstrumentation } from '@opentelemetry/instrumentation-nestjs-core';
// import { Resource } from '@opentelemetry/resources';
// import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';
// // import { JaegerExporter } from '@opentelemetry/exporter-jaeger';
// import { SequelizeInstrumentation } from 'opentelemetry-instrumentation-sequelize';
// import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-grpc';
//
// let tracingSDK: NodeSDK | null = null;
//
// /**
//  * Starts the OpenTelemetry tracing SDK.
//  *
//  * @param serviceName - Name of the service for telemetry.
//  * @param jaegerEndpoint - Endpoint for Jaeger traces (default: http://localhost:14268/api/traces).
//  */
// export const startTracing = async (
//   serviceName: string,
//   // jaegerEndpoint: string = 'http://localhost:14268/api/traces'
// ): Promise<void> => {
//   if (tracingSDK) {
//     console.log(`[Tracing] SDK is already running for service: ${serviceName}`);
//     return;
//   }
//
//   console.log(`[Tracing] Starting tracing for service: ${serviceName}`);
//   // const jaegerExporter = new JaegerExporter({
//   //   endpoint: jaegerEndpoint,
//   // });
//   //
//   // tracingSDK = new NodeSDK({
//   //   resource: new Resource({
//   //     [SemanticResourceAttributes.SERVICE_NAME]: serviceName,
//   //   }),
//   //   spanProcessor: new SimpleSpanProcessor(jaegerExporter),
//   //   instrumentations: [
//   //     new HttpInstrumentation(),
//   //     new ExpressInstrumentation(),
//   //     new NestInstrumentation(),
//   //     new SequelizeInstrumentation(),
//   //   ],
//   // });
//
//   const otlpExporter = new OTLPTraceExporter({
//     url: 'http://jaeger:4317',
//   });
//
//   tracingSDK = new NodeSDK({
//     resource: new Resource({
//       [SemanticResourceAttributes.SERVICE_NAME]: serviceName,
//     }),
//     spanProcessor: new SimpleSpanProcessor(otlpExporter),
//     instrumentations: [
//       new HttpInstrumentation(),
//       new ExpressInstrumentation(),
//       new NestInstrumentation(),
//       new SequelizeInstrumentation(),
//     ],
//   });
//
//   try {
//     await tracingSDK.start();
//     console.log(`[Tracing] Tracing started successfully for service: ${serviceName}`);
//   } catch (err) {
//     console.error(`[Tracing] Failed to start tracing for service: ${serviceName}`, err);
//   }
//
//   // Gracefully shut down the tracing SDK on process termination
//   process.on('SIGTERM', async () => {
//     if (tracingSDK) {
//       try {
//         await tracingSDK.shutdown();
//         console.log(`[Tracing] SDK shut down for service: ${serviceName}`);
//       } catch (err) {
//         console.error(`[Tracing] Error shutting down SDK for service: ${serviceName}`, err);
//       }
//     }
//   });
// };
//
// /**
//  * Stops the OpenTelemetry tracing SDK.
//  */
// export const stopTracing = async (): Promise<void> => {
//   if (!tracingSDK) {
//     console.log('[Tracing] No tracing SDK is running.');
//     return;
//   }
//
//   try {
//     await tracingSDK.shutdown();
//     console.log('[Tracing] Tracing SDK shut down successfully.');
//   } catch (err) {
//     console.error('[Tracing] Error shutting down tracing SDK:', err);
//   } finally {
//     tracingSDK = null;
//   }
// };














import { SimpleSpanProcessor } from '@opentelemetry/sdk-trace-base';
import { NodeSDK } from '@opentelemetry/sdk-node';
import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
import { ExpressInstrumentation } from '@opentelemetry/instrumentation-express';
import { NestInstrumentation } from '@opentelemetry/instrumentation-nestjs-core';
import { Resource } from '@opentelemetry/resources';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';
import { SequelizeInstrumentation } from 'opentelemetry-instrumentation-sequelize';
import  { AwsLambdaInstrumentation }  from '@opentelemetry/instrumentation-aws-lambda';
import { propagation, context as otelContext } from '@opentelemetry/api';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-proto';

const startTracingForSam = async (serviceName: string, exporterEndpoint: string = 'http://jaeger:4318/v1/traces') => {


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
      // new AwsLambdaInstrumentation(),
      new HttpInstrumentation(),
      new ExpressInstrumentation(),
      new NestInstrumentation(),
      new SequelizeInstrumentation(),
    ],
  });

  try {
    tracingSDK.start();

    console.log(`[Tracing] Tracing started successfully for service: ${serviceName}`);
  } catch (err) {
    console.error(`[Tracing] Failed to start tracing for service: ${serviceName}`, err);
  }
};

export { startTracingForSam };
