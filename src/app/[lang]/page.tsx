import type { Metadata } from "next"
import Link from "next/link"
import { siteConfig } from "@/config/site"
import { baseLocale, loadedLocales, locales } from "@/i18n/i18n-util"
import { loadLocale } from "@/i18n/i18n-util.sync"
import { buildLocalizedHref } from "@/utils/locale"
import { GithubIcon, ItchIOIcon } from "../../components/Icons"
import { LocaleSwitcher } from "../../components/LocaleSwitcher"
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
    openGraph: {
      title: dict.HomePage.meta.title,
      description: dict.HomePage.meta.description,
      url: canonicalPath,
      siteName: siteConfig.name,
      locale,
      type: "website",
    },
  }
}

export default async function HomePage({ params }: PageProps) {
  const { lang } = await params
  const locale = resolveLocale(lang)

  loadLocale(locale)
  const dict = loadedLocales[locale]

  return (
    <div className={styles.container}>
      <LocaleSwitcher currentLocale={locale} />
      <main className={styles.main}>
        <h1 className={styles.title}>Marco Toniut</h1>

        <p className={styles.description}></p>

        <div className={styles.grid}>
          <Link className={styles.cardInteractive} href={`/${locale}/cv`}>
            <h2 className={styles.cardHeading}>
              <span>{dict.HomePage.cv.label}</span>
            </h2>
          </Link>

          <div className={styles.projectRow}>
            <h2 className={styles.projectHeading}>
              {dict.HomePage.carcinisation.label}
            </h2>
            <div className={styles.actionRow}>
              <a
                className={styles.iconLink}
                href="https://github.com/marcotoniut/carcinisation"
                rel="noreferrer"
                aria-label="View Carcinisation on GitHub"
              >
                <GithubIcon />
              </a>
              <a
                className={styles.iconLink}
                href="https://marcotoniut.itch.io/carcinisation"
                rel="noreferrer"
                aria-label="Play Carcinisation on itch.io"
              >
                <ItchIOIcon />
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>© 2025</footer>
    </div>
  )
}
