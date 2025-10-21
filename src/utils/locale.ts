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
