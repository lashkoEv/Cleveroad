import { Module } from '@nestjs/common';
import { LoggerService } from 'apps/common/src/utils/logger/logger.service';

@Module({
    providers: [LoggerService],
    exports: [LoggerService],
})
export class LoggerModule { }
