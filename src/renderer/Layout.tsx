import type { ReactNode } from "react"
import { ErrorBoundary } from "@/components/ErrorBoundary"
import { GoogleAnalytics } from "@/components/GoogleAnalytics"
import { ThemeProvider } from "@/components/theme-provider"
import TypesafeI18n from "@/i18n/i18n-react"
import { useLocale } from "@/i18n/page-locale"
import { ServerError } from "@/pages/_error/ServerError"

import "@/styles/global.css.ts"
import "@/styles/globals.css"

export function Layout({ children }: { children: ReactNode }) {
  const locale = useLocale()

  return (
    <ThemeProvider>
      <TypesafeI18n locale={locale}>
        <ErrorBoundary fallback={<ServerError />}>{children}</ErrorBoundary>
        <GoogleAnalytics />
      </TypesafeI18n>
    </ThemeProvider>
  )
}
