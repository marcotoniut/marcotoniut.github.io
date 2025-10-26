import { z } from "zod"
import type { Locales } from "./i18n-types"
import { locales } from "./i18n-util"

function assertNonEmptyLocales(
  value: readonly Locales[],
): asserts value is readonly [Locales, ...Locales[]] {
  if (value.length === 0) {
    throw new Error("The locales array must contain at least one locale.")
  }
}

assertNonEmptyLocales(locales)

export const LOCALES = locales

export const LocaleSchema = z.enum(LOCALES)
