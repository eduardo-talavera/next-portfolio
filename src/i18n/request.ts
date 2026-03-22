import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

export default getRequestConfig(async ({locale = routing.defaultLocale}) => {

  if (!routing.locales.includes(locale as 'es' | 'en')) {
    locale = routing.defaultLocale
  }

  return {
    locale,
    messages: {
      ...(await import(`../messages/${locale}/common.json`)).default,
      ...(await import(`../messages/${locale}/about.json`)).default
    }
  };
});
