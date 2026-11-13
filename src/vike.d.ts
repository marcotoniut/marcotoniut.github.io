import type { ReactNode } from "react"
import type { Locales } from "@/i18n/i18n-types"
import type { Seo } from "@/utils/seo"

type SeoSetting = (locale: Locales) => Seo

declare global {
  namespace Vike {
    interface PageContext {
      /** The route path without its locale prefix, e.g. `cv`; see `+onBeforeRender`. */
      routePath: string
    }
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
