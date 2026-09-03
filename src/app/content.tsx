import type { Metadata } from "next"
import Image from "next/image"
import { buildLocalizedMetadataFromMeta } from "@/app/[lang]/common/metadata"
import * as styles from "@/app/[lang]/home.css"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { TrackedLink } from "@/components/TrackedLink"
import type { Locales, Translation } from "@/i18n/i18n-types"
import { loadedLocales } from "@/i18n/i18n-util"
import { loadLocale } from "@/i18n/i18n-util.sync"
import * as commonStyles from "@/styles/layouts.css"
import { contentRev } from "@/utils/content-rev"

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

type DesignationProps = {
  index: string
  category: string
  year?: number
  stack: string
}

/**
 * Structural designation fields joined for display; `year` is explicitly
 * optional so a missing fact renders as a shorter designation, never as an
 * invented value.
 */
const Designation = ({ index, category, year, stack }: DesignationProps) => (
  <span className={styles.designation}>
    {[index, category, year?.toString(), stack]
      .filter((field) => field !== undefined)
      .join(" · ")}
  </span>
)

export const HomePageContent = ({ dict, locale }: HomePageContentProps) => {
  return (
    <div className={commonStyles.pageContainer}>
      <Header currentLocale={locale} nav={dict.Common.nav} />

      <main className={styles.main}>
        <section className={styles.titleBlock}>
          <span className={`${styles.corner} ${styles.cornerTl}`}>
            {dict.CVPage.profession}
          </span>
          <span className={`${styles.corner} ${styles.cornerTr}`}>
            {dict.HomePage.location}
          </span>

          <h1 className={styles.title}>Marco Toniut</h1>
          <p className={styles.range}>{dict.HomePage.range}</p>

          <nav className={styles.ctas}>
            <TrackedLink
              className={styles.ctaLink}
              href={`/${locale}/contact`}
              locale={locale}
              trackingType="contact_navigation"
              fromPage="home_page"
            >
              {dict.HomePage.contact.hint}
            </TrackedLink>
            <TrackedLink
              className={styles.ctaLink}
              href={`/${locale}/cv`}
              locale={locale}
              trackingType="cv_navigation"
              fromPage="home_page"
            >
              {dict.HomePage.cv.hint}
            </TrackedLink>
          </nav>

          {contentRev !== undefined ? (
            <span className={`${styles.corner} ${styles.cornerBr}`}>
              {`REV ${contentRev}`}
            </span>
          ) : null}
        </section>

        <section className={styles.bench}>
          <p className={styles.benchLabel}>{dict.HomePage.workLabel}</p>

          <TrackedLink
            className={`${styles.panel} ${styles.panelCarcinisation}`}
            href={`/${locale}/projects/carcinisation`}
            locale={locale}
            trackingType="contact_navigation"
            fromPage="home_page"
          >
            <span className={styles.panelBody}>
              <Designation
                index="01"
                category={dict.HomePage.carcinisation.category}
                year={2023}
                stack={dict.HomePage.carcinisation.stack}
              />
              <h2 className={styles.panelTitle}>
                {dict.HomePage.carcinisation.label}
              </h2>
              <p className={styles.pitch}>
                {dict.HomePage.carcinisation.pitch}
              </p>
            </span>
            <span className={styles.mediaMount}>
              <Image
                alt={dict.HomePage.carcinisation.mediaAlt}
                className={styles.mediaImage}
                height={144}
                src="/projects/carcinisation/cover.png"
                width={160}
              />
            </span>
          </TrackedLink>

          <TrackedLink
            className={`${styles.panel} ${styles.panelSonicthames}`}
            href={`/${locale}/projects/sonicthames`}
            locale={locale}
            trackingType="contact_navigation"
            fromPage="home_page"
          >
            <span className={styles.panelBody}>
              <Designation
                index="02"
                category={dict.HomePage.sonicThames.category}
                stack={dict.HomePage.sonicThames.stack}
              />
              <h2 className={styles.panelTitle}>
                {dict.HomePage.sonicThames.label}
              </h2>
              <p className={styles.pitch}>{dict.HomePage.sonicThames.pitch}</p>
            </span>
          </TrackedLink>
        </section>
      </main>

      <Footer labels={dict.Common.footer} />
    </div>
  )
}
