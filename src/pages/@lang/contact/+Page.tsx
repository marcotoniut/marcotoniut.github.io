import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { Box } from "@/components/ui/primitives"
import { siteConfig } from "@/config/site"
import { useI18nContext } from "@/i18n/i18n-react"
import { useDictionary } from "@/i18n/use-dictionary"
import { email } from "@/info"
import * as styles from "./contact.css"

export default function ContactPage() {
  const { locale } = useI18nContext()
  const dict = useDictionary()

  return (
    <div className={styles.container}>
      <Header currentLocale={locale} nav={dict.Common.nav} />

      <main className={styles.main}>
        <Box textAlign="center" width="full">
          <h1 className={styles.title}>{dict.ContactPage.title}</h1>
          <p className={styles.description}>{dict.ContactPage.description}</p>
        </Box>

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
