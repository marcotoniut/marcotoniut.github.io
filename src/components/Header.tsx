import Link from "next/link"
import { Controls } from "@/components/Controls"
import type { Locales } from "@/i18n/i18n-types"
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
}

export function Header({ currentLocale, nav }: HeaderProps) {
  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <Link href={`/${currentLocale}`} className={styles.wordmark}>
          MT·TONIUT
        </Link>
        <nav aria-label={nav.label} className={styles.nav}>
          <Link className={styles.navLink} href={`/${currentLocale}`}>
            {nav.work}
          </Link>
          <Link className={styles.navLink} href={`/${currentLocale}/cv`}>
            {nav.cv}
          </Link>
          <Link className={styles.navLink} href={`/${currentLocale}/contact`}>
            {nav.contact}
          </Link>
        </nav>
        <Controls currentLocale={currentLocale} />
      </header>
    </div>
  )
}
