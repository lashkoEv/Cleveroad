import { Module } from '@nestjs/common';
import { JwtStrategy } from 'apps/common/src/strategies/jwt.strategy';
import { guardProviders } from 'apps/common/src/utils/guards/guard.provider';
import { UsersController } from 'apps/users/src/users.controller';
import { UsersService } from 'apps/users/src/users.service';
import { ConfigModule } from 'apps/common/src/utils/config/config.module';
import { jwtModuleInstance } from 'apps/common/src/utils/jwt/jwt.module';
import { sequelizeProvider } from 'apps/common/src/utils/database/database.provider';
import { modelProviders } from 'apps/users/src/models.provider';
import { User } from 'apps/users/src/models';
import { SessionsService } from 'apps/sessions/src/sessions.service';
import { redisModuleInstance } from 'apps/common/src/utils/database/redis.provider';
import { LoggerModule } from 'apps/common/src/utils/logger/logger.module';

@Module({
    imports: [
        ConfigModule,
        jwtModuleInstance,
        redisModuleInstance,
        LoggerModule,
    ],
    providers: [
        UsersService,
        SessionsService,
        JwtStrategy,
        ...guardProviders,
        sequelizeProvider([User]),
        ...modelProviders,
    ],
    controllers: [UsersController]
})
export class UsersModule { }
