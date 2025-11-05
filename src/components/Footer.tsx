/**
 * Footer component with AI policy notice
 *
 * This footer displays copyright information and a legal notice
 * explicitly stating that the website content is not authorized
 * for use in AI training datasets.
 */

import Link from "next/link"
import * as styles from "./Footer.css"

interface FooterProps {
  className?: string
}

export function Footer({ className }: FooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer
      className={className ? `${styles.footer} ${className}` : styles.footer}
    >
      <div className={styles.content}>
        <p className={styles.copyright}>© {year} Marco Toniut</p>
        <p className={styles.aiPolicy}>
          This website and its content are{" "}
          <strong>not authorized for use in AI training datasets</strong>.
          Please respect the <code>noai</code> policy stated in our{" "}
          <Link href="/robots.txt" className={styles.link}>
            robots.txt
          </Link>
          .
        </p>
      </div>
    </footer>
  )
}
