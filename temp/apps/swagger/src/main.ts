// import { startTracingForSam } from 'opentelemetry';

import { NestFactory } from '@nestjs/core';
import { configure as serverlessExpress } from '@vendia/serverless-express';
import { Callback, Context, Handler } from 'aws-lambda';
import { SwaggerAppModule } from 'apps/swagger/src/swagger.module';
import { ConfigService } from 'apps/common/src/utils/config/config.service';
import { appBuilder } from 'apps/common/src/utils/appBuilder/app-builder.provider';
import { setupSwagger } from 'apps/swagger/src/setup-swagger';

let server: Handler;

async function bootstrap(): Promise<Handler> {
  const app = await NestFactory.create(SwaggerAppModule);
  const configService = app.get(ConfigService);

  await setupSwagger(app, configService);

  await appBuilder(app, configService);

  const expressApp = app.getHttpAdapter().getInstance();
  return serverlessExpress({ app: expressApp });
}

export const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  // await startTracingForSam('swagger');
  server = server ?? (await bootstrap());
  return server(event, context, callback);
};
