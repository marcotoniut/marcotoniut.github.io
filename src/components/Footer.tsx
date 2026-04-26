import Link from "next/link"
import * as styles from "./Footer.css"
import { GithubIcon, ItchIOIcon, LinkedInIcon } from "./icons"

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
        <p className={styles.copyright}>Marco Toniut, {year}</p>
        <nav className={styles.iconRow} aria-label="Social links">
          <a
            className={styles.iconLink}
            href="https://github.com/marcotoniut"
            rel="noreferrer"
            target="_blank"
            aria-label="GitHub"
          >
            <GithubIcon />
          </a>
          <a
            className={styles.iconLink}
            href="https://www.linkedin.com/in/marco-toniut-4b6a143a/"
            rel="noreferrer"
            target="_blank"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a
            className={styles.iconLink}
            href="https://marcotoniut.itch.io/"
            rel="noreferrer"
            target="_blank"
            aria-label="itch.io"
          >
            <ItchIOIcon />
          </a>
        </nav>
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
