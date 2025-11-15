import type { Metadata } from "next"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import type { Locales } from "@/i18n/i18n-types"
import { baseLocale, loadedLocales, locales } from "@/i18n/i18n-util"
import { loadLocale } from "@/i18n/i18n-util.sync"
import * as commonStyles from "@/styles/layouts.css"
import { buildLocalizedHref } from "@/utils/locale"
import {
  generateOpenGraphMetadata,
  generateTwitterMetadata,
} from "@/utils/metadata"
import { resolveLocale } from "../../utils"
import { SonicThamesContent } from "./content"
import { sonicthamesCopyEn } from "./copy/en"
import { sonicthamesCopyEs } from "./copy/es"
import * as styles from "./sonicthames.css"

const sonicthamesCopy = {
  en: sonicthamesCopyEn,
  es: sonicthamesCopyEs,
} as const

type PageParams = {
  params: Promise<{ lang: Locales }>
}

const metadataTitle = "SonicThames"

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { lang } = await params
  const locale = resolveLocale(lang)
  loadLocale(locale)

  const description =
    sonicthamesCopy[locale]?.meta.description ??
    sonicthamesCopy.en.meta.description

  const languageAlternates = Object.fromEntries(
    locales.map((availableLocale) => [
      availableLocale,
      buildLocalizedHref(availableLocale, "projects/sonicthames"),
    ]),
  )

  const canonicalPath = buildLocalizedHref(locale, "projects/sonicthames")

  const languages = {
    ...languageAlternates,
    "x-default": buildLocalizedHref(baseLocale, "projects/sonicthames"),
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

export default async function SonicThamesPage({ params }: PageParams) {
  const { lang } = await params
  const locale = resolveLocale(lang)

  loadLocale(locale)
  const dict = loadedLocales[locale]

  return (
    <div className={`${commonStyles.pageContainer} ${styles.page}`}>
      <Header
        currentLocale={locale}
        backLink={{
          href: buildLocalizedHref(locale),
          label: dict.Common.goBack,
        }}
      />

      <div className={styles.bodyWrapper}>
        <main className={styles.main}>
          <SonicThamesContent locale={locale} />
        </main>
      </div>

      <div className={styles.footerWrapper}>
        <Footer className={styles.footerOverride} />
      </div>
    </div>
  )
}
