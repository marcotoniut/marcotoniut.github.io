import { createElement } from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { describe, expect, it } from "vitest"
import { PageHead } from "@/components/head/PageHead"
import { siteConfig } from "@/config/site"
import { ROBOTS_DIRECTIVES } from "@/utils/metadata"
import { documentTitle, previewImageAlt } from "@/utils/seo"

const render = (props: Parameters<typeof PageHead>[0]) =>
  renderToStaticMarkup(createElement(PageHead, props))

describe("previewImageAlt", () => {
  it("names the site and the page", () => {
    expect(previewImageAlt("Resume")).toBe(`${siteConfig.name} - Resume`)
  })

  it("does not repeat the site name on the home page", () => {
    expect(previewImageAlt(siteConfig.name)).toBe(siteConfig.name)
  })
})

describe("documentTitle", () => {
  it("appends the site name to a page title", () => {
    expect(documentTitle("Resume")).toBe(`Resume | ${siteConfig.name}`)
  })

  it("leaves the site name on its own for the home page", () => {
    expect(documentTitle(siteConfig.name)).toBe(siteConfig.name)
  })
})

describe("PageHead for an indexable page", () => {
  const html = render({
    seo: { title: "Resume", description: "My CV", indexable: true },
    locale: "es",
    path: "cv",
  })

  it("suffixes the document title but not the preview titles", () => {
    expect(html).toContain(`<title>Resume | ${siteConfig.name}</title>`)
    expect(html).toContain('<meta property="og:title" content="Resume"/>')
    expect(html).toContain('<meta name="twitter:title" content="Resume"/>')
  })

  it("points the canonical and og:url at the page's own locale", () => {
    expect(html).toContain(
      '<link rel="canonical" href="https://marcotoniut.com/es/cv/"/>',
    )
    expect(html).toContain(
      '<meta property="og:url" content="https://marcotoniut.com/es/cv/"/>',
    )
    expect(html).toContain('<meta property="og:locale" content="es-AR"/>')
  })

  it("lists every locale and the base locale as x-default", () => {
    expect(html).toContain(
      '<link rel="alternate" hrefLang="en" href="https://marcotoniut.com/en/cv/"/>',
    )
    expect(html).toContain(
      '<link rel="alternate" hrefLang="es" href="https://marcotoniut.com/es/cv/"/>',
    )
    expect(html).toContain(
      '<link rel="alternate" hrefLang="x-default" href="https://marcotoniut.com/en/cv/"/>',
    )
  })

  it("allows indexing with the AI opt-out directives", () => {
    expect(html).toContain(
      `<meta name="robots" content="${ROBOTS_DIRECTIVES}"/>`,
    )
  })

  it("names the page in the preview image alt text", () => {
    expect(html).toContain(
      `<meta property="og:image:alt" content="${siteConfig.name} - Resume"/>`,
    )
  })
})

describe("PageHead for a page kept out of search results", () => {
  const html = render({
    seo: {
      title: siteConfig.name,
      description: siteConfig.description,
      indexable: false,
    },
    locale: "en",
    path: "cv",
  })

  it("sends a single noindex and no canonical or alternate links", () => {
    expect(html.match(/name="robots"/g)).toHaveLength(1)
    expect(html).toContain('<meta name="robots" content="noindex, nofollow"/>')
    expect(html).not.toContain('rel="canonical"')
    expect(html).not.toContain('rel="alternate"')
  })
})
