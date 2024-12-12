import { Global, Module } from '@nestjs/common';
import { configProvider } from 'apps/common/src/utils/config/config.provider';
import { ConfigService } from 'apps/common/src/utils/config/config.service';

@Global()
@Module({
  providers: [
    configProvider,
    ConfigService
  ],
  exports: [ConfigService],
})
export class ConfigModule {}