import type { Metadata } from "next"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { GithubIcon, ItchIOIcon } from "@/components/Icons"
import { TrackedAnchor, TrackedLink } from "@/components/TrackedLink"
import { baseLocale, loadedLocales, locales } from "@/i18n/i18n-util"
import { loadLocale } from "@/i18n/i18n-util.sync"
import * as commonStyles from "@/styles/layouts.css"
import { buildLocalizedHref } from "@/utils/locale"
import {
  generateOpenGraphMetadata,
  generateTwitterMetadata,
} from "@/utils/metadata"
import * as styles from "./home.css"
import { resolveLocale } from "./utils"

type PageProps = {
  params: Promise<{ lang: string }>
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang } = await params
  const locale = resolveLocale(lang)

  loadLocale(locale)
  const dict = loadedLocales[locale]

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

export default async function HomePage({ params }: PageProps) {
  const { lang } = await params
  const locale = resolveLocale(lang)

  loadLocale(locale)
  const dict = loadedLocales[locale]

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

          <div className={styles.projectRow}>
            <h2 className={styles.projectHeading}>
              {dict.HomePage.carcinisation.label}
            </h2>
            <div className={styles.actionRow}>
              <TrackedAnchor
                className={styles.iconLink}
                href="https://github.com/marcotoniut/carcinisation"
                rel="noreferrer"
                aria-label="View Carcinisation on GitHub"
                locale={locale}
                trackingType="project_link"
                trackingParams={{
                  link_url: "https://github.com/marcotoniut/carcinisation",
                  link_location: "home_page",
                  project_name: "carcinisation",
                  link_type: "github",
                }}
              >
                <GithubIcon />
              </TrackedAnchor>
              <TrackedAnchor
                className={styles.iconLink}
                href="https://marcotoniut.itch.io/carcinisation"
                rel="noreferrer"
                aria-label="Play Carcinisation on itch.io"
                locale={locale}
                trackingType="project_link"
                trackingParams={{
                  link_url: "https://marcotoniut.itch.io/carcinisation",
                  link_location: "home_page",
                  project_name: "carcinisation",
                  link_type: "itch_io",
                }}
              >
                <ItchIOIcon />
              </TrackedAnchor>
            </div>
          </div>
        </div>
      </main>

      <Footer className={styles.footer} />
    </div>
  )
}
