import type { Metadata } from "next"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { baseLocale, loadedLocales, locales } from "@/i18n/i18n-util"
import { loadLocale } from "@/i18n/i18n-util.sync"
import { buildLocalizedHref } from "@/utils/locale"
import {
  generateOpenGraphMetadata,
  generateTwitterMetadata,
} from "@/utils/metadata"
import { resolveLocale } from "../utils"
import { ContactForm } from "./components/ContactForm"
import * as styles from "./contact.css"

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
      buildLocalizedHref(availableLocale, "/contact"),
    ]),
  )

  const canonicalPath = buildLocalizedHref(locale, "/contact")

  const languages = {
    ...languageAlternates,
    "x-default": buildLocalizedHref(baseLocale, "/contact"),
  }

  return {
    title: dict.ContactPage.meta.title,
    description: dict.ContactPage.meta.description,
    alternates: {
      canonical: canonicalPath,
      languages,
    },
    openGraph: generateOpenGraphMetadata({
      title: dict.ContactPage.meta.title,
      description: dict.ContactPage.meta.description,
      url: canonicalPath,
      locale,
    }),
    twitter: generateTwitterMetadata({
      title: dict.ContactPage.meta.title,
      description: dict.ContactPage.meta.description,
    }),
  }
}

export default async function ContactPage({ params }: PageProps) {
  const { lang } = await params
  const locale = resolveLocale(lang)

  loadLocale(locale)
  const dict = loadedLocales[locale]

  return (
    <div className={styles.container}>
      <Header
        currentLocale={locale}
        backLink={{
          href: `/${locale}`,
          label: dict.ContactPage.backToHome,
        }}
      />

      <main className={styles.main}>
        <div className={styles.contentHeader}>
          <h1 className={styles.title}>{dict.ContactPage.title}</h1>
          <p className={styles.description}>{dict.ContactPage.description}</p>
        </div>

        <ContactForm translations={dict.ContactPage.form} />
      </main>

      <Footer className={styles.footer} />
    </div>
  )
}
