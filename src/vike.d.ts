import type { ReactNode } from "react"
import type { Locales } from "@/i18n/i18n-types"
import type { Seo } from "@/utils/seo"

type SeoSetting = (locale: Locales) => Seo

declare global {
  namespace Vike {
    interface Config {
      Page?: () => ReactNode
      /** The page's title, description and indexability; see `Head`. */
      seo?: SeoSetting
    }
    interface ConfigResolved {
      seo?: SeoSetting
    }
  }
}
