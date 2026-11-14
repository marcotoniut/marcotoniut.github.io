import { Controls } from "@/components/Controls"
import type { Locales } from "@/i18n/i18n-types"
import { buildLocalizedHref } from "@/utils/locale"
import * as styles from "./Header.css"

export interface HeaderNavLabels {
  label: string
  work: string
  cv: string
  contact: string
}

interface HeaderProps {
  currentLocale: Locales
  nav: HeaderNavLabels
  showThemeToggle?: boolean
}

export function Header({
  currentLocale,
  nav,
  showThemeToggle = true,
}: HeaderProps) {
  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <a href={buildLocalizedHref(currentLocale)} className={styles.wordmark}>
          MT·TONIUT
        </a>
        <nav aria-label={nav.label} className={styles.nav}>
          <a
            className={styles.navLink}
            href={buildLocalizedHref(currentLocale)}
          >
            {nav.work}
          </a>
          <a
            className={styles.navLink}
            href={buildLocalizedHref(currentLocale, "cv")}
          >
            {nav.cv}
          </a>
          <a
            className={styles.navLink}
            href={buildLocalizedHref(currentLocale, "contact")}
          >
            {nav.contact}
          </a>
        </nav>
        <Controls
          currentLocale={currentLocale}
          showThemeToggle={showThemeToggle}
        />
      </header>
    </div>
  )
}
