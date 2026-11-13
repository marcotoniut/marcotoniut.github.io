import { siteConfig } from "@/config/site"

/** What a page tells search engines and link previews about itself. */
export type Seo = {
  /** The page's name without the site suffix; the site name on the home page. */
  title: string
  description: string
  /** A page kept out of search results gets `noindex` and no canonical links. */
  indexable: boolean
}

export function documentTitle(title: string): string {
  return title === siteConfig.name ? title : `${title} | ${siteConfig.name}`
}

export function previewImageAlt(title: string): string {
  return title === siteConfig.name
    ? siteConfig.name
    : `${siteConfig.name} - ${title}`
}

export function absoluteUrl(path: string): string {
  return new URL(path, siteConfig.baseUrl).toString()
}
