import type { Metadata } from "next"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { i18nDictionary } from "../common"
import { buildLocalizedMetadataFromMeta } from "../common/metadata"
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

  const { dictionary: dict } = await i18nDictionary(locale)

  return buildLocalizedMetadataFromMeta({
    locale,
    meta: dict.ContactPage.meta,
    pathSuffix: "/contact",
  })
}

export default async function ContactPage({ params }: PageProps) {
  const { lang } = await params
  const locale = resolveLocale(lang)

  const { dictionary: dict } = await i18nDictionary(locale)

  return (
    <div className={styles.container}>
      <Header
        currentLocale={locale}
        backLink={{
          href: `/${locale}`,
          label: dict.Common.goBack,
        }}
      />

      <main className={styles.main}>
        <div className={styles.contentHeader}>
          <h1 className={styles.title}>{dict.ContactPage.title}</h1>
          <p className={styles.description}>{dict.ContactPage.description}</p>
        </div>

        <ContactForm translations={dict.ContactPage.form} />
      </main>

      <Footer />
    </div>
  )
}
