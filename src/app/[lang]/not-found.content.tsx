"use client"

import Link from "next/link"
import { useContext } from "react"
import { I18nContext } from "@/i18n/i18n-react"
import { pressStartFont } from "@/styles/fonts"
import * as styles from "./not-found.css"

export function NotFoundContent() {
  const { LL, locale } = useContext(I18nContext)

  return (
    <div className={styles.page}>
      <p className={styles.kicker}>{LL.NotFoundPage.kicker()}</p>
      <h1 className={`${pressStartFont.className} ${styles.code}`}>404</h1>
      <p className={styles.subtitle}>{LL.NotFoundPage.title()}</p>
      <Link href={`/${locale}/`} className={styles.homeLink}>
        ← {LL.NotFoundPage.returnHome()}
      </Link>
    </div>
  )
}
