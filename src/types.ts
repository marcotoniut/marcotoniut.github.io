import type { ReactNode } from "react"
import type { Locales } from "./i18n/i18n-types"

export interface PageProps {
  children?: ReactNode
  params: { lang: Locales }
}

export interface MetadataAttributes {
  params: { lang: Locales }
}
