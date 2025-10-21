import type { ReactNode } from "react"
import { locales } from "../../i18n/i18n-util"
import { i18nDictionary } from "./common"
import ClientComponent from "./layoutClient"
import { resolveLocale } from "./utils"

type LayoutProps = {
  children: ReactNode
  params: Promise<{ lang: string }>
}

export const generateStaticParams = async () => {
  return locales.map((lang) => ({ lang }))
}

export const dynamicParams = false

export default async function GlobalLayout({ children, params }: LayoutProps) {
  const { lang } = await params
  const locale = resolveLocale(lang)
  const i18n = await i18nDictionary(locale)

  return (
    <ClientComponent locale={i18n.locale} translation={i18n.dictionary}>
      {children}
    </ClientComponent>
  )
}
