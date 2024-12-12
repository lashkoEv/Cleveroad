import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { ForbiddenException, HttpStatus, Injectable } from '@nestjs/common';
import { UserSessionDto } from 'apps/sessions/src/models';
import { SessionsService } from 'apps/sessions/src/sessions.service';
import { ConfigService } from 'apps/common/src/utils/config/config.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        private readonly sessionsService: SessionsService,
        private readonly configService: ConfigService
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get('JWT_SECRET')
        });
    }

    authenticate(request: any, options?: any) {
        const token = request.headers['authorization'] && request.headers['authorization'].split(' ')[1];

        this.sessionsService
            .findSession(token)
            .then(user => this.success(user));
    }

    async validate(payload: UserSessionDto) {
        if (!payload) {
            throw new ForbiddenException({ 
                message: 'USER_UNAUTHORIZED', 
                statusCode: HttpStatus.FORBIDDEN 
            });
        }

        return payload;
    }
}
