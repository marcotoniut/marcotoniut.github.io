import type { LOCALIZED_ROUTES } from "@/config/routes"
import type { Locales } from "@/i18n/i18n-types"
import { locales } from "@/i18n/i18n-util"
import { LocaleSchema } from "@/i18n/schemas"

/**
 * Builds a localized href path with optional suffix.
 * Example: buildLocalizedHref("en", "cv") produces "/en/cv/"
 */
export function buildLocalizedHref(locale: string, pathSuffix?: string) {
  const segments = [locale]
  if (pathSuffix) {
    segments.push(pathSuffix.replace(/^\/+|\/+$/g, ""))
  }
  return `/${segments.join("/")}/`
}

/** Narrows an arbitrary value to a supported locale. */
export function parseLocale(candidate: unknown): Locales | undefined {
  const parsed = LocaleSchema.safeParse(candidate)
  return parsed.success ? parsed.data : undefined
}

/**
 * Replaces the locale segment in a pathname, or returns /{newLocale}/ if none
 * found.
 */
export function createLocalePath(pathname: string, newLocale: Locales): string {
  const [first, ...rest] = pathname.split("/").filter(Boolean)

  return parseLocale(first) === undefined
    ? buildLocalizedHref(newLocale)
    : buildLocalizedHref(newLocale, rest.join("/"))
}

/** Every locale's URL for a registered route, for prerendering. */
export function localizedUrls(
  path: (typeof LOCALIZED_ROUTES)[number]["path"],
): string[] {
  return locales.map((locale) => buildLocalizedHref(locale, path))
}
