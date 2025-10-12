import { NextRequest, NextResponse } from "next/server"
import {
  initAcceptLanguageHeaderDetector,
  initRequestCookiesDetector,
} from "typesafe-i18n/detectors"
import { detectLocale, locales } from "./i18n/i18n-util"

// function escapeRegExp(str: string) {
//   return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
// }
// const LOCALE_PATHS_REGEX = locales.map((l) => `(?!${l})` as const).join("");
// const match = `/((?!_next)(?=[^.]*$)${LOCALE_PATHS_REGEX}.*)`;

function getLocale(request: NextRequest) {
  const requestCookiesDetector = initRequestCookiesDetector({
    cookies: request.cookies.toString(),
  })
  const acceptLanguageHeaderDetector = initAcceptLanguageHeaderDetector(request)
  return detectLocale(requestCookiesDetector, acceptLanguageHeaderDetector)
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)

    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url))
  }
}

export const config = {
  matcher: [
    `/((?!_next)(?=[^.]*$)(?!en)(?!es).*)`,
    // TODO for whatever reason, this dynamic string doesn't work
    // `/((?!_next)(?=[^.]*$)${LOCALE_PATHS_REGEX}.*)`,
    // "/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)",
  ],
}
