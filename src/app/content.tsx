import type { Metadata } from "next"
import { buildLocalizedMetadataFromMeta } from "@/app/[lang]/common/metadata"
import * as styles from "@/app/[lang]/home.css"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { TrackedLink } from "@/components/TrackedLink"
import type { Locales, Translation } from "@/i18n/i18n-types"
import { loadedLocales } from "@/i18n/i18n-util"
import { loadLocale } from "@/i18n/i18n-util.sync"
import { pressStartFont } from "@/styles/fonts"
import * as commonStyles from "@/styles/layouts.css"

export const loadHomePageDictionary = (locale: Locales) => {
  loadLocale(locale)
  return loadedLocales[locale]
}

export const buildHomePageMetadata = (locale: Locales): Metadata => {
  const dict = loadHomePageDictionary(locale)

  return buildLocalizedMetadataFromMeta({
    locale,
    meta: dict.HomePage.meta,
  })
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
        <div>
          <h1 className={styles.title}>Marco Toniut</h1>
          <p className={styles.kicker}>{dict.CVPage.profession}</p>
        </div>

        <nav className={styles.primaryNav}>
          <TrackedLink
            className={styles.navLink}
            href={`/${locale}/cv`}
            locale={locale}
            trackingType="cv_navigation"
            fromPage="home_page"
          >
            {dict.HomePage.cv.label}
          </TrackedLink>
          <span className={styles.navSeparator} aria-hidden>
            ·
          </span>
          <TrackedLink
            className={styles.navLink}
            href={`/${locale}/contact`}
            locale={locale}
            trackingType="contact_navigation"
            fromPage="home_page"
          >
            {dict.HomePage.contact.label}
          </TrackedLink>
        </nav>

        <div className={styles.projects}>
          <TrackedLink
            className={styles.projectCardGb}
            href={`/${locale}/projects/carcinisation`}
            locale={locale}
            trackingType="contact_navigation"
            fromPage="home_page"
          >
            <span
              className={`${pressStartFont.className} ${styles.projectTitle}`}
            >
              {dict.HomePage.carcinisation.label}
            </span>
            <p className={styles.projectHint}>
              GBJam 11 — Rust · Bevy ECS · Game Boy prototype
            </p>
          </TrackedLink>

          <TrackedLink
            className={styles.projectCardSonic}
            href={`/${locale}/projects/sonicthames`}
            locale={locale}
            trackingType="contact_navigation"
            fromPage="home_page"
          >
            <span className={styles.projectTitle}>
              {dict.HomePage.sonicThames.label}
            </span>
            <p className={styles.projectHint}>
              {dict.HomePage.sonicThames.hint}
            </p>
          </TrackedLink>
        </div>
      </main>

      <Footer />
    </div>
  )
}
