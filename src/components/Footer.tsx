import { AnalyticsPreferencesButton } from "@/components/AnalyticsConsentBanner"
import { BuyMeACoffeeCTA } from "@/components/BuyMeACoffeeCTA"
import { Box } from "@/components/ui/primitives"
import { siteConfig } from "@/config/site"
import { email } from "@/info"
import * as styles from "./Footer.css"

export interface FooterLabels {
  contact: string
  elsewhere: string
  colophon: string
}

interface FooterProps {
  className?: string
  labels: FooterLabels
}

export function Footer({ className, labels }: FooterProps) {
  return (
    <footer
      className={className ? `${styles.footer} ${className}` : styles.footer}
    >
      <div className={styles.cells}>
        <div className={styles.cell}>
          <span className={styles.cellLabel}>{labels.contact}</span>
          <a className={styles.emailLink} href={`mailto:${email}`}>
            {email}
          </a>
        </div>
        <div className={styles.cell}>
          <span className={styles.cellLabel}>{labels.elsewhere}</span>
          <Box
            as="nav"
            aria-label="Social links"
            display="flex"
            flexWrap="wrap"
            rowGap="xs"
            columnGap="lg"
          >
            <a
              className={styles.cellLink}
              href={siteConfig.social.github}
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub
            </a>
            <a
              className={styles.cellLink}
              href={siteConfig.social.linkedin}
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              className={styles.cellLink}
              href={siteConfig.social.itch}
              rel="noopener noreferrer"
              target="_blank"
            >
              itch.io
            </a>
          </Box>
        </div>
        <div className={styles.cell}>
          <span className={styles.cellLabel}>{labels.colophon}</span>
          <p className={styles.colophonLine}>
            Marco Toniut, {siteConfig.copyrightYear}
          </p>
          <BuyMeACoffeeCTA className={styles.coffee} location="footer" />
          <AnalyticsPreferencesButton className={styles.cellButton} />
        </div>
      </div>
      <p className={styles.aiPolicy}>
        This website and its content are{" "}
        <strong>not authorized for use in AI training datasets</strong>. Please
        respect the <code>noai</code> policy stated in our{" "}
        <a href="/robots.txt" className={styles.link}>
          robots.txt
        </a>
        .
      </p>
    </footer>
  )
}
