import type { Locales } from "@/i18n/i18n-types"
import type { LayoutProps } from "@/types"
import { baseLocale, locales } from "../../i18n/i18n-util"
import { i18nDictionary } from "./common"
import ClientComponent from "./layoutClient"

export const generateStaticParams = async () => {
  return locales.map((lang) => ({ lang }))
}

export default async function GlobalLayout({ children, params }: LayoutProps) {
  const { lang } = await params
  // const langResult = LocaleSchema.safeParse(lang);
  // const locale = langResult.success ? langResult.data : baseLocale;

  const locale = locales.includes(lang as Locales)
    ? (lang as Locales)
    : baseLocale
  const i18n = await i18nDictionary(locale)

  return (
    <ClientComponent locale={i18n.locale} translation={i18n.dictionary}>
      {children}
    </ClientComponent>
  )
}
