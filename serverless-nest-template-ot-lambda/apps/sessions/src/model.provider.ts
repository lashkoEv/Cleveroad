import { User } from 'apps/users/src/models';

export const modelProviders = [
    {
        provide: 'USER_MODEL',
        useValue: User,
    }
];
