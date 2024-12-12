import { NextFunction, Request, Response } from 'express';
import { LoggerService } from 'apps/common/src/utils/logger/logger.service';

const logger = new LoggerService('HTTP');

export function requestResponseLogger(request: Request, response: Response, next: NextFunction): void {
    const { ip, method, originalUrl } = request;
    const userAgent = request.get('user-agent') || '';
    const start = Date.now();

    response.on('finish', () => {
        const duration = Date.now() - start;

        const { statusCode } = response;
        const contentLength = response.get('content-length');

        logger.log(
            `${method} ${originalUrl} ${statusCode} ${contentLength} - ${userAgent} ${ip} - Duration: ${duration}ms`,
        );
    });

    next();
}