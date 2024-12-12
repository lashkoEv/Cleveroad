import { Module } from '@nestjs/common';
import { JwtStrategy } from 'apps/common/src/strategies/jwt.strategy';
import { UsersService } from 'apps/users/src/users.service';
import { SessionsController } from 'apps/sessions/src/sessions.controller';
import { SessionsService } from 'apps/sessions/src/sessions.service';
import { guardProviders } from 'apps/common/src/utils/guards/guard.provider';
import { ConfigModule } from 'apps/common/src/utils/config/config.module';
import { jwtModuleInstance } from 'apps/common/src/utils/jwt/jwt.module';
import { sequelizeProvider } from 'apps/common/src/utils/database/database.provider';
import { redisModuleInstance } from 'apps/common/src/utils/database/redis.provider';
import { User } from 'apps/users/src/models';
import { modelProviders } from 'apps/sessions/src/model.provider';
import { LoggerModule } from 'apps/common/src/utils/logger/logger.module';

@Module({
  imports: [
    ConfigModule,
    jwtModuleInstance,
    redisModuleInstance,
    LoggerModule
  ],
  controllers: [SessionsController],
  providers: [
    SessionsService,
    UsersService,
    JwtStrategy,
    ...guardProviders,
    sequelizeProvider([User]),
    ...modelProviders
  ]
})
export class SessionsModule {}
