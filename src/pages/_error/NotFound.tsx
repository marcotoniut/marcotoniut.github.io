import { useI18nContext } from "@/i18n/i18n-react"
import { pressStartFont } from "@/styles/fonts.css"
import { buildLocalizedHref } from "@/utils/locale"
import * as styles from "./error.css"

export function NotFound() {
  const { LL, locale } = useI18nContext()

  return (
    <div className={styles.page}>
      <p className={styles.kicker}>{LL.NotFoundPage.kicker()}</p>
      <h1 className={`${pressStartFont} ${styles.code}`}>404</h1>
      <p className={styles.subtitle}>{LL.NotFoundPage.title()}</p>
      <a href={buildLocalizedHref(locale)} className={styles.homeLink}>
        ← {LL.NotFoundPage.returnHome()}
      </a>
    </div>
  )
}
