import { siteConfig } from "@/config/site"
import type { Locales } from "@/i18n/i18n-types"
import { baseLocale, locales } from "@/i18n/i18n-util"
import { toLocaleTag } from "@/i18n/locale-tags"
import { buildLocalizedHref } from "@/utils/locale"
import { ROBOTS_DIRECTIVES } from "@/utils/metadata"
import type { Seo } from "@/utils/seo"
import { absoluteUrl, documentTitle, previewImageAlt } from "@/utils/seo"

type PageHeadProps = {
  seo: Seo
  locale: Locales
  /** The route path without its locale prefix, e.g. `cv`. */
  path: string
}

export function PageHead({ seo, locale, path }: PageHeadProps) {
  const { title, description } = seo
  const titleTags = (
    <>
      <title>{documentTitle(title)}</title>
      <meta name="description" content={description} />
    </>
  )

  if (!seo.indexable) {
    return (
      <>
        {titleTags}
        <meta name="robots" content="noindex, nofollow" />
      </>
    )
  }

  const canonical = absoluteUrl(buildLocalizedHref(locale, path))

  return (
    <>
      {titleTags}
      <meta name="robots" content={ROBOTS_DIRECTIVES} />
      <link rel="canonical" href={canonical} />
      {locales.map((alternate) => (
        <link
          key={alternate}
          rel="alternate"
          hrefLang={alternate}
          href={absoluteUrl(buildLocalizedHref(alternate, path))}
        />
      ))}
      <link
        rel="alternate"
        hrefLang="x-default"
        href={absoluteUrl(buildLocalizedHref(baseLocale, path))}
      />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:locale" content={toLocaleTag(locale)} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:image" content={siteConfig.social.ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={previewImageAlt(title)} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={siteConfig.social.ogImage} />
    </>
  )
}
