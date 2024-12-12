import { startTracingForSam } from 'opentelemetry';
import { NestFactory } from '@nestjs/core';
import { configure as serverlessExpress } from '@vendia/serverless-express';
import { ConfigService } from 'apps/common/src/utils/config/config.service';
import { Callback, Context, Handler } from 'aws-lambda';
import { UsersModule } from 'apps/users/src/users.module';
import { appBuilder } from 'apps/common/src/utils/appBuilder/app-builder.provider';

let server: Handler;

async function bootstrap(): Promise<Handler> {
  const app = await NestFactory.create(UsersModule);
  const configService = app.get(ConfigService);

  await appBuilder(app, configService);

  const expressApp = app.getHttpAdapter().getInstance();
  return serverlessExpress({ app: expressApp });
}

export const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  await startTracingForSam('users');
  server = server ?? (await bootstrap());
  return server(event, context, callback);
};
