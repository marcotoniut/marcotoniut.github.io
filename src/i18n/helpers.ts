import type { Locales } from "./i18n-types"
import { baseLocale } from "./i18n-util"

/**
 * Creates a locale-to-copy resolver with fallback to baseLocale.
 */
export function createLocaleCopy<T>(
  copies: Record<Locales, T>,
): (locale: Locales) => T {
  return (locale) => copies[locale] ?? copies[baseLocale]
}

/**
 * Derives copy types from a literal-rich base locale so localized versions
 * only need to match the structure; every string literal becomes `string`.
 */
export type WidenLocaleStrings<T> = T extends string
  ? string
  : T extends readonly [infer First, infer Second, ...infer Rest]
    ? readonly [
        WidenLocaleStrings<First>,
        WidenLocaleStrings<Second>,
        ...{
          [K in keyof Rest]: WidenLocaleStrings<Rest[K]>
        },
      ]
    : T extends readonly (infer U)[]
      ? readonly WidenLocaleStrings<U>[]
      : T extends Record<string, unknown>
        ? { [K in keyof T]: WidenLocaleStrings<T[K]> }
        : T
