import type { ReactNode } from "react"
import type { Locales } from "./i18n/i18n-types"

type LangParams = { lang: Locales | string }

export interface PageProps {
  params: Promise<LangParams>
}

export interface LayoutProps extends PageProps {
  children: ReactNode
}

export interface MetadataAttributes {
  params: Promise<LangParams>
}
