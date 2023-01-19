// https://github.com/i18next/i18next-parser
import { translate } from 'bing-translate-api';
import { languageCodes } from './src/config/i18n';

export default {
  locales: languageCodes,
  input: ['src/**/*.{js,jsx,ts,tsx}'],
  output: 'public/locales/$LOCALE/$NAMESPACE.json',
  indentation: 2,
  keySeparator: false,
  namespaceSeparator: false,
  defaultValue: async (locale: string, namespace: string, key: string) => {
    if (locale === 'en') {
      return key;
    } else {
      try {
        const bingLang = locale === 'zh' ? 'zh-Hans' : locale;
        const result = await translate(key, 'en', bingLang);
        return result.translation;
      } catch (e) {
        console.log(e);
        return '';
      }
    }
  },
};
