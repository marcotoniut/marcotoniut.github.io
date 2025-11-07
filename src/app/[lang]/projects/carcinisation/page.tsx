import type { Metadata } from "next"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import type { Locales } from "@/i18n/i18n-types"
import { baseLocale, loadedLocales, locales } from "@/i18n/i18n-util"
import { loadLocale } from "@/i18n/i18n-util.sync"
import { buildLocalizedHref } from "@/utils/locale"
import {
  generateOpenGraphMetadata,
  generateTwitterMetadata,
} from "@/utils/metadata"
import { resolveLocale } from "../../utils"
import * as projectStyles from "./carcinisation.css"
import { CarcinisationContent } from "./content"
import { carcinisationCopyEn } from "./copy/en"
import { carcinisationCopyEs } from "./copy/es"

const carcinisationCopy = {
  en: carcinisationCopyEn,
  es: carcinisationCopyEs,
} as const

type PageParams = {
  params: Promise<{ lang: Locales }>
}

const metadataTitle = "Carcinisation"

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { lang } = await params
  const locale = resolveLocale(lang)
  loadLocale(locale)

  const description =
    carcinisationCopy[locale]?.short ?? carcinisationCopy.en.short

  const languageAlternates = Object.fromEntries(
    locales.map((availableLocale) => [
      availableLocale,
      buildLocalizedHref(availableLocale, "projects/carcinisation"),
    ]),
  )

  const canonicalPath = buildLocalizedHref(locale, "projects/carcinisation")

  const languages = {
    ...languageAlternates,
    "x-default": buildLocalizedHref(baseLocale, "projects/carcinisation"),
  }

  return {
    title: metadataTitle,
    description,
    alternates: {
      canonical: canonicalPath,
      languages,
    },
    openGraph: generateOpenGraphMetadata({
      title: metadataTitle,
      description,
      url: canonicalPath,
      locale,
    }),
    twitter: generateTwitterMetadata({
      title: metadataTitle,
      description,
    }),
  }
}

export default async function CarcinisationPage({ params }: PageParams) {
  const { lang } = await params
  const locale = resolveLocale(lang)

  loadLocale(locale)
  const dict = loadedLocales[locale]

  return (
    <div className={`${projectStyles.pageShell} ${projectStyles.gbBackdrop}`}>
      <div className={projectStyles.pageShellContent}>
        <div className={projectStyles.pageHeader}>
          <Header
            currentLocale={locale}
            backLink={{
              href: buildLocalizedHref(locale),
              label: dict.Common.goBack,
            }}
          />
        </div>
        <main>
          <CarcinisationContent locale={locale} />
        </main>
        <Footer className={projectStyles.footer} />
      </div>
    </div>
  )
}
