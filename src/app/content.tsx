import type { Metadata } from "next"
import * as styles from "@/app/[lang]/home.css"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { TrackedLink } from "@/components/TrackedLink"
import type { Locales, Translation } from "@/i18n/i18n-types"
import { baseLocale, loadedLocales, locales } from "@/i18n/i18n-util"
import { loadLocale } from "@/i18n/i18n-util.sync"
import * as commonStyles from "@/styles/layouts.css"
import { buildLocalizedHref } from "@/utils/locale"
import {
  generateOpenGraphMetadata,
  generateTwitterMetadata,
} from "@/utils/metadata"

export const loadHomePageDictionary = (locale: Locales) => {
  loadLocale(locale)
  return loadedLocales[locale]
}

export const buildHomePageMetadata = (locale: Locales): Metadata => {
  const dict = loadHomePageDictionary(locale)

  const languageAlternates = Object.fromEntries(
    locales.map((availableLocale) => [
      availableLocale,
      buildLocalizedHref(availableLocale),
    ]),
  )

  const canonicalPath = buildLocalizedHref(locale)

  const languages = {
    ...languageAlternates,
    "x-default": buildLocalizedHref(baseLocale),
  }

  return {
    title: dict.HomePage.meta.title,
    description: dict.HomePage.meta.description,
    alternates: {
      canonical: canonicalPath,
      languages,
    },
    openGraph: generateOpenGraphMetadata({
      title: dict.HomePage.meta.title,
      description: dict.HomePage.meta.description,
      url: canonicalPath,
      locale,
    }),
    twitter: generateTwitterMetadata({
      title: dict.HomePage.meta.title,
      description: dict.HomePage.meta.description,
    }),
  }
}

type HomePageContentProps = {
  dict: Translation
  locale: Locales
}

export const HomePageContent = ({ dict, locale }: HomePageContentProps) => {
  return (
    <div className={commonStyles.pageContainer}>
      <Header currentLocale={locale} />

      <main className={styles.main}>
        <h1 className={styles.title}>Marco Toniut</h1>
        <p className={styles.description}></p>
        <div className={styles.grid}>
          <TrackedLink
            className={styles.cardInteractive}
            href={`/${locale}/cv`}
            locale={locale}
            trackingType="cv_navigation"
            fromPage="home_page"
          >
            <span className={styles.cardHeading}>{dict.HomePage.cv.label}</span>
          </TrackedLink>

          <TrackedLink
            className={styles.cardInteractive}
            href={`/${locale}/contact`}
            locale={locale}
            trackingType="contact_navigation"
            fromPage="home_page"
          >
            <span className={styles.cardHeading}>
              {dict.HomePage.contact.label}
            </span>
          </TrackedLink>

          <TrackedLink
            className={styles.cardInteractive}
            href={`/${locale}/projects/carcinisation`}
            locale={locale}
            trackingType="contact_navigation"
            fromPage="home_page"
          >
            <span className={styles.cardHeading}>
              {dict.HomePage.carcinisation.label}
            </span>
          </TrackedLink>

          <TrackedLink
            className={styles.cardInteractive}
            href={`/${locale}/projects/sonicthames`}
            locale={locale}
            trackingType="contact_navigation"
            fromPage="home_page"
          >
            <span className={styles.cardHeading}>
              {dict.HomePage.sonicThames.label}
            </span>
            <p className={styles.cardHint}>{dict.HomePage.sonicThames.hint}</p>
          </TrackedLink>
        </div>
      </main>

      <Footer />
    </div>
  )
}
