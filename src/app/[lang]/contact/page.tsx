import type { Metadata } from "next"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { siteConfig } from "@/config/site"
import { email } from "@/info"
import { i18nDictionary } from "../common"
import { buildLocalizedMetadataFromMeta } from "../common/metadata"
import { resolveLocale } from "../utils"
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
      <Header currentLocale={locale} nav={dict.Common.nav} />

      <main className={styles.main}>
        <div className={styles.contentHeader}>
          <h1 className={styles.title}>{dict.ContactPage.title}</h1>
          <p className={styles.description}>{dict.ContactPage.description}</p>
        </div>

        <div className={styles.emailPanel}>
          <span className={styles.panelLabel}>
            {dict.ContactPage.emailLabel}
          </span>
          <a
            className={styles.emailLink}
            href={`mailto:${email}?subject=${encodeURIComponent(
              dict.CVPage.contactDetails.subject,
            )}`}
          >
            {email}
          </a>
          <span className={styles.panelLabel}>
            {dict.Common.footer.elsewhere}
          </span>
          <div className={styles.elsewhereRow}>
            <a
              className={styles.elsewhereLink}
              href={siteConfig.social.linkedin}
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              className={styles.elsewhereLink}
              href={siteConfig.social.github}
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </div>
      </main>

      <Footer labels={dict.Common.footer} />
    </div>
  )
}
