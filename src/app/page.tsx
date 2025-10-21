import type { Metadata } from "next"

import { LocaleRedirect } from "@/components/locale-redirect"
import { baseLocale } from "@/i18n/i18n-util"
import { buildLocalizedHref } from "@/utils/locale"

const fallbackHref = buildLocalizedHref(baseLocale)

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default function RootRedirectPage() {
  return (
    <>
      <LocaleRedirect />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <p>Redirecting...</p>
      </div>
      <noscript>
        <meta httpEquiv="refresh" content={`0;url=${fallbackHref}`} />
        <p>
          JavaScript is required to auto-detect your language.{" "}
          <a href={fallbackHref}>
            Continue to the {baseLocale.toUpperCase()} site
          </a>
          .
        </p>
      </noscript>
    </>
  )
}
