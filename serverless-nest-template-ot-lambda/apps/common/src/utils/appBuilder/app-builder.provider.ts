import { INestApplication, ValidationPipe, VersioningType } from '@nestjs/common';
import { TranslatorFilter } from 'nestjs-translator';
import { ConfigService } from 'apps/common/src/utils/config/config.service';
import { LoggerService } from 'apps/common/src/utils/logger/logger.service';
import { requestResponseLogger } from 'apps/common/src/utils/logger/logger-middleware';
import { ApiVersions } from 'apps/common/src/resources/versioning';
import { translatorService } from 'apps/common/src/utils/translator/translator.provider';

export const appBuilder = async (app: INestApplication, configService: ConfigService): Promise<INestApplication> => {
    app.enableCors({ origin: JSON.parse(configService.get('CORS_ORIGINS')) });

    app.enableVersioning({
        type: VersioningType.URI,
        prefix: configService.get('API_VERSION_PREFIX'),
        defaultVersion: ApiVersions
    });

    app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));

    app.useGlobalFilters(new TranslatorFilter(translatorService(configService.get('FALLBACK_LANGUAGE'))));

    app.useLogger(new LoggerService());

    app.use(requestResponseLogger);

    await app.init();
    return app;
};
