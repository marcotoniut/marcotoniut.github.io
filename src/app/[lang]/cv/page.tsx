import type { Metadata } from "next"
import type { Locales } from "@/i18n/i18n-types"
import { baseLocale, loadedLocales, locales } from "@/i18n/i18n-util"
import { loadLocale } from "@/i18n/i18n-util.sync"
import { buildLocalizedHref } from "@/utils/locale"
import {
  generateOpenGraphMetadata,
  generateTwitterMetadata,
} from "@/utils/metadata"
import { CVContent } from "./content"

type PageProps = {
  params: Promise<{ lang: Locales }>
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang } = await params
  const locale = locales.includes(lang) ? lang : baseLocale

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
    openGraph: generateOpenGraphMetadata({
      title: dict.CVPage.meta.title,
      description: dict.CVPage.meta.description,
      url: canonicalPath,
      locale,
    }),
    twitter: generateTwitterMetadata({
      title: dict.CVPage.meta.title,
      description: dict.CVPage.meta.description,
    }),
  }
}

export default function CVPage() {
  const isPdfPrinting = process.env.NEXT_PUBLIC_PDF_PRINTING === "true"
  return <CVContent isPdfPrinting={isPdfPrinting} />
}
