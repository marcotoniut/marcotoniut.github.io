import { describe, expect, it } from "vitest"
import type { Locales } from "@/i18n/i18n-types"
import { locales } from "@/i18n/i18n-util"
import { loadAllLocales } from "@/i18n/i18n-util.sync"
import type { Seo } from "@/utils/seo"

loadAllLocales()

const seoSettings = import.meta.glob<{ default: (locale: Locales) => Seo }>(
  "/src/pages/**/+seo.ts",
  { eager: true },
)

const NOT_INDEXED = new Set([
  "/src/pages/cv/+seo.ts",
  "/src/pages/_error/+seo.ts",
])

describe("page +seo settings", () => {
  it.each(
    Object.entries(seoSettings).flatMap(([file, setting]) =>
      locales.map((locale) => [file, locale, setting] as const),
    ),
  )("%s describes the page in %s", (file, locale, setting) => {
    const seo = setting.default(locale)
    expect(seo.title).not.toBe("")
    expect(seo.description).not.toBe("")
    expect(seo.indexable).toBe(!NOT_INDEXED.has(file))
  })
})
