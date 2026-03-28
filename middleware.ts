
import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';

const intlMiddleware = createMiddleware({
  locales: ['es', 'en'],
  defaultLocale: 'es'
});

export default function middleware(req: NextRequest) {
  const url = req.nextUrl;

  if (url.pathname === '/') {
    const lang = req.headers.get('accept-language');
    const locale = lang?.startsWith('en') ? 'en' : 'es';

    return Response.redirect(new URL(`/${locale}`, req.url));
  }

  return intlMiddleware(req);
}
