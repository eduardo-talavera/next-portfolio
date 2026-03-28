import createMiddleware from 'next-intl/middleware';
import { routing } from './src/i18n/routing';
import { NextRequest } from 'next/server';

export default createMiddleware(routing);

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};

export function middleware(req: NextRequest) {
  console.log('MIDDLEWARE RUNNING:', req.nextUrl.pathname);
  return createMiddleware(routing)(req);
}