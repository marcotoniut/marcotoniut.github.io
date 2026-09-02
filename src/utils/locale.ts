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

/** Narrows an arbitrary value to a supported locale. */
export function parseLocale(candidate: unknown): Locales | undefined {
  const parsed = LocaleSchema.safeParse(candidate)
  return parsed.success ? parsed.data : undefined
}

/**
 * Replaces the locale segment in a pathname, or returns /{newLocale} if none found.
 */
export function createLocalePath(pathname: string, newLocale: Locales): string {
  const segments = pathname.split("/").filter(Boolean)

  if (segments.length > 0 && parseLocale(segments[0])) {
    segments[0] = newLocale
    return `/${segments.join("/")}`
  }
  return `/${newLocale}`
}
