import { SetMetadata } from '@nestjs/common';
import { UserRoles } from 'apps/common/src/resources/users';

export const Roles = (...roles: UserRoles[]) => SetMetadata('roles', roles);
