"use client"

import Link from "next/link"
import { pressStartFont } from "@/styles/fonts"
import * as styles from "./not-found.css"

export default function ErrorPage() {
  return (
    <div className={styles.page}>
      <p className={styles.kicker}>Something went wrong</p>
      <h1 className={`${pressStartFont.className} ${styles.code}`}>500</h1>
      <p className={styles.subtitle}>An unexpected error occurred</p>
      <Link href="/" className={styles.homeLink}>
        ← Return home
      </Link>
    </div>
  )
}
