import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from 'apps/common/src/utils/config/config.service';

export const jwtModuleInstance = JwtModule.registerAsync({
  useFactory: (configService: ConfigService) => ({
    secret: configService.get('JWT_SECRET'),
    signOptions: {
      expiresIn: configService.get('JWT_EXPIRES_IN'),
    }
  }),
  inject: [ConfigService]
});