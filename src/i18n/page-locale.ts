import type { PageContextWithServerRouting } from "vike/types"
import { usePageContext } from "@/renderer/page-context"
import { parseLocale } from "@/utils/locale"
import type { Locales } from "./i18n-types"
import { baseLocale } from "./i18n-util"

type RoutedPageContext = Pick<PageContextWithServerRouting, "routeParams">

function routeParamsOf(pageContext: RoutedPageContext): Record<string, string> {
  const { routeParams } = pageContext
  if (routeParams === undefined) {
    throw new Error("The page context reached the browser without routeParams")
  }
  return routeParams
}

/**
 * The page's locale: its `@lang` route segment, or the base locale for the
 * unprefixed pages (`/`, `/cv/`, the error page).
 */
export function localeOf(pageContext: RoutedPageContext): Locales {
  const routeParams = routeParamsOf(pageContext)
  if (!("lang" in routeParams)) {
    return baseLocale
  }
  const locale = parseLocale(routeParams["lang"])
  if (locale === undefined) {
    throw new Error(
      `Unsupported locale route segment: ${String(routeParams["lang"])}`,
    )
  }
  return locale
}

/** The route path without its locale prefix, e.g. `projects/sonicthames`. */
export function localizedPath(
  pageContext: RoutedPageContext & { urlPathname: string },
): string {
  const segments = pageContext.urlPathname.split("/").filter(Boolean)
  const hasLocalePrefix = "lang" in routeParamsOf(pageContext)
  return (hasLocalePrefix ? segments.slice(1) : segments).join("/")
}

export function useLocale(): Locales {
  return localeOf(usePageContext())
}
