import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from 'apps/common/src/utils/guards/jwt-auth.guard';
import { RolesGuard } from 'apps/common/src/utils/guards/roles.guard';

export const guardProviders = [
    {
        provide: APP_GUARD,
        useClass: JwtAuthGuard,
    },
    {
        provide: APP_GUARD,
        useClass: RolesGuard,
    },
];
