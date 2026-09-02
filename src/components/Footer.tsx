import { siteConfig } from "@/config/site"
import * as styles from "./Footer.css"
import { GithubIcon, ItchIOIcon, LinkedInIcon } from "./icons"

interface FooterProps {
  className?: string
}

export function Footer({ className }: FooterProps) {
  return (
    <footer
      className={className ? `${styles.footer} ${className}` : styles.footer}
    >
      <div className={styles.content}>
        <p className={styles.copyright}>
          Marco Toniut, {siteConfig.copyrightYear}
        </p>
        <nav className={styles.iconRow} aria-label="Social links">
          <a
            className={styles.iconLink}
            href={siteConfig.social.github}
            rel="noopener noreferrer"
            target="_blank"
            aria-label="GitHub"
          >
            <GithubIcon />
          </a>
          <a
            className={styles.iconLink}
            href={siteConfig.social.linkedin}
            rel="noopener noreferrer"
            target="_blank"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a
            className={styles.iconLink}
            href={siteConfig.social.itch}
            rel="noopener noreferrer"
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
          {/* Plain anchor: robots.txt is a static file, not a route, so there
              is nothing for the Next router to navigate to. */}
          <a href="/robots.txt" className={styles.link}>
            robots.txt
          </a>
          .
        </p>
      </div>
    </footer>
  )
}
