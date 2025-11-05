import Link from "next/link"
import { Controls } from "@/components/Controls"
import type { Locales } from "@/i18n/i18n-types"
import * as styles from "./Header.css"

interface HeaderProps {
  currentLocale: Locales
  backLink?: {
    href: string
    label: string
  }
}

export function Header({ currentLocale, backLink }: HeaderProps) {
  return (
    <header className={styles.header}>
      {backLink ? (
        <Link href={backLink.href} className={styles.backLink}>
          ← {backLink.label}
        </Link>
      ) : (
        <div />
      )}
      <Controls currentLocale={currentLocale} />
    </header>
  )
}
