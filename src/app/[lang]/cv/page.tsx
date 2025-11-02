import type { Metadata } from "next"
import { siteConfig } from "@/config/site"
import { baseLocale, loadedLocales, locales } from "@/i18n/i18n-util"
import { loadLocale } from "@/i18n/i18n-util.sync"
import { buildLocalizedHref } from "@/utils/locale"
import { CVContent } from "./content"

type PageProps = {
  params: Promise<{ lang: string }>
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang } = await params
  const locale = locales.includes(lang as (typeof locales)[number])
    ? (lang as (typeof locales)[number])
    : baseLocale

  loadLocale(locale)
  const dict = loadedLocales[locale]

  const languageAlternates = Object.fromEntries(
    locales.map((availableLocale) => [
      availableLocale,
      buildLocalizedHref(availableLocale, "cv"),
    ]),
  )

  const canonicalPath = buildLocalizedHref(locale, "cv")

  const languages = {
    ...languageAlternates,
    "x-default": buildLocalizedHref(baseLocale, "cv"),
  }

  return {
    title: dict.CVPage.meta.title,
    description: dict.CVPage.meta.description,
    alternates: {
      canonical: canonicalPath,
      languages,
    },
    openGraph: {
      title: dict.CVPage.meta.title,
      description: dict.CVPage.meta.description,
      url: canonicalPath,
      siteName: siteConfig.name,
      locale,
      type: "website",
    },
  }
}

export default function CVPage() {
  return <CVContent />
}
