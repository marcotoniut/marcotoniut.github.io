import { ThemeToggle } from "@/components/ThemeToggle"
import { useI18nContext } from "@/i18n/i18n-react"
import type { Locales } from "@/i18n/i18n-types"
import { locales } from "@/i18n/i18n-util"
import { toLocaleTag } from "@/i18n/locale-tags"
import { usePageContext } from "@/renderer/page-context"
import { setStoredLocale } from "@/utils/language-storage"
import { buildLocalizedHref } from "@/utils/locale"
import * as styles from "./Header.css"

export function Controls({ currentLocale }: { currentLocale: Locales }) {
  const { LL } = useI18nContext()
  const { routePath } = usePageContext()

  return (
    <div className={styles.controlBar}>
      <ThemeToggle />
      <nav aria-label={LL.Common.language()} className={styles.languageSwitch}>
        {locales.map((locale) => (
          <a
            aria-current={locale === currentLocale ? "page" : undefined}
            className={styles.languageLink}
            href={buildLocalizedHref(locale, routePath)}
            hrefLang={locale}
            key={locale}
            lang={toLocaleTag(locale)}
            onClick={() => setStoredLocale(locale)}
          >
            {locale.toUpperCase()}
          </a>
        ))}
      </nav>
    </div>
  )
}
