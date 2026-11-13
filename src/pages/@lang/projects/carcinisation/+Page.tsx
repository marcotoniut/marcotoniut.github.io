import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { useI18nContext } from "@/i18n/i18n-react"
import { useDictionary } from "@/i18n/use-dictionary"
import * as projectStyles from "./carcinisation.css"
import { CarcinisationContent } from "./content"

export default function CarcinisationPage() {
  const { locale } = useI18nContext()
  const dict = useDictionary()

  return (
    <div className={`${projectStyles.pageShell} ${projectStyles.gbBackdrop}`}>
      <div className={projectStyles.pageShellContent}>
        <div className={projectStyles.pageHeader}>
          <Header currentLocale={locale} nav={dict.Common.nav} />
        </div>
        <main>
          <CarcinisationContent locale={locale} />
        </main>
        <Footer className={projectStyles.footer} labels={dict.Common.footer} />
      </div>
    </div>
  )
}
