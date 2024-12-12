import { Module } from '@nestjs/common';
import { SessionsModule } from 'apps/sessions/src/sessions.module';
import { UsersModule } from 'apps/users/src/users.module';

@Module({
  imports: [
    UsersModule,
    SessionsModule,
  ]
})
export class SwaggerAppModule { }
