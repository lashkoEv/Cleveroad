import { TranslatorService } from 'nestjs-translator';
import * as process from 'node:process';

const headerLanguageOptions = ['language', 'lang', 'l'];

export const translatorService  = (lang: string) => new TranslatorService(
    lang,
    process.cwd() + '/locales',
    req => req.get(headerLanguageOptions.find((key) => req.get(key)))
);
