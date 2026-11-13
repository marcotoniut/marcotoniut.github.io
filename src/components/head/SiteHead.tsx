import { siteConfig } from "@/config/site"
import { env } from "@/env"
import { SITE_FONT_FILES } from "@/styles/font-files"
import { THEME_BOOTSTRAP_SCRIPT } from "@/styles/theme"
import { ANALYTICS_CONSENT_KEY } from "@/utils/analytics-consent"
import { buildGtagBootstrapScript } from "@/utils/gtag"
import { generatePersonStructuredData, serializeJsonLd } from "@/utils/metadata"

const measurementId = env.PUBLIC_ENV__GA_MEASUREMENT_ID

/** Tags every page carries, whatever its content. */
export function SiteHead({ pageFonts }: { pageFonts: readonly string[] }) {
  return (
    <>
      <script
        // biome-ignore lint/security/noDangerouslySetInnerHtml: Blocking theme script prevents flash of wrong theme
        dangerouslySetInnerHTML={{ __html: THEME_BOOTSTRAP_SCRIPT }}
      />
      {measurementId === undefined ? null : (
        <script
          // biome-ignore lint/security/noDangerouslySetInnerHtml: Google's tag snippet; the measurement id is validated by the env schema
          dangerouslySetInnerHTML={{
            __html: buildGtagBootstrapScript(
              measurementId,
              ANALYTICS_CONSENT_KEY,
            ),
          }}
        />
      )}
      {[...SITE_FONT_FILES, ...pageFonts].map((href) => (
        <link
          key={href}
          as="font"
          crossOrigin="anonymous"
          href={href}
          rel="preload"
          type="font/woff2"
        />
      ))}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="author" href={siteConfig.author.url} />
      <meta name="author" content={siteConfig.author.name} />
      <meta name="creator" content={siteConfig.author.name} />
      <meta name="publisher" content={siteConfig.author.name} />
      <meta name="keywords" content={siteConfig.keywords.join(",")} />
      {/* Meta-tag equivalent of the Referrer-Policy header, which GitHub
          Pages cannot send. */}
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      <meta name="ai-policy" content="noai, noimageai, nocontentai" />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data requires dangerouslySetInnerHTML; content is static and HTML-escaped via serializeJsonLd
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(generatePersonStructuredData()),
        }}
      />
    </>
  )
}
