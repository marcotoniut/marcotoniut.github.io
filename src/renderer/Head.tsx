import type { PageContextServer } from "vike/types"
import { PageHead } from "@/components/head/PageHead"
import { SiteHead } from "@/components/head/SiteHead"
import { localeOf } from "@/i18n/page-locale"

export function Head({ pageContext }: { pageContext: PageContextServer }) {
  const { preloadFonts = [], seo } = pageContext.config
  if (seo === undefined) {
    throw new Error(`${pageContext.urlPathname} has no +seo setting`)
  }
  const locale = localeOf(pageContext)

  return (
    <>
      <SiteHead pageFonts={preloadFonts} />
      <PageHead
        seo={seo(locale)}
        locale={locale}
        path={pageContext.routePath}
      />
    </>
  )
}
