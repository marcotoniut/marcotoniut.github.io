import type { Locales } from "@/i18n/i18n-types"
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

/**
 * Replaces the locale segment in a pathname, or returns /{newLocale} if none found.
 */
export function createLocalePath(pathname: string, newLocale: Locales): string {
  const segments = pathname.split("/").filter(Boolean)
  const parsedSegment =
    segments.length > 0 ? LocaleSchema.safeParse(segments[0]) : null

  if (parsedSegment?.success) {
    segments[0] = newLocale
    return `/${segments.join("/")}`
  }
  return `/${newLocale}`
}
