import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { useI18nContext } from "@/i18n/i18n-react"
import { useDictionary } from "@/i18n/use-dictionary"
import * as styles from "./carcinisation.css"
import { CarcinisationContent } from "./content"

export default function CarcinisationPage() {
  const { locale } = useI18nContext()
  const dict = useDictionary()

  return (
    <div className={styles.pageShell}>
      <div className={styles.pageShellContent}>
        <Header
          currentLocale={locale}
          nav={dict.Common.nav}
          showThemeToggle={false}
        />
        <main>
          <CarcinisationContent
            coverAlt={dict.HomePage.carcinisation.mediaAlt}
            locale={locale}
          />
        </main>
        <Footer labels={dict.Common.footer} />
      </div>
    </div>
  )
}
