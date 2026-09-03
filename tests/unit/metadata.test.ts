import { describe, expect, it } from "vitest"
import { siteConfig } from "@/config/site"
import {
  generateOpenGraphMetadata,
  generatePersonStructuredData,
  generateTwitterMetadata,
  ROBOTS_DIRECTIVES,
  serializeJsonLd,
} from "@/utils/metadata"

describe("generatePersonStructuredData", () => {
  const data = generatePersonStructuredData()

  it("returns valid schema.org Person type", () => {
    expect(data["@context"]).toBe("https://schema.org")
    expect(data["@type"]).toBe("Person")
  })

  it("uses siteConfig values", () => {
    expect(data.name).toBe(siteConfig.author.name)
    expect(data.url).toBe(siteConfig.baseUrl)
    expect(data.jobTitle).toBe(siteConfig.jobTitle)
    expect(data.description).toBe(siteConfig.description)
  })

  it("includes sameAs links", () => {
    expect(data.sameAs).toEqual(expect.arrayContaining([...siteConfig.sameAs]))
  })

  it("includes knowsAbout array", () => {
    expect(data.knowsAbout?.length).toBeGreaterThan(0)
  })
})

describe("generateOpenGraphMetadata", () => {
  it("generates metadata with required fields", () => {
    const og = generateOpenGraphMetadata({
      title: "Test Page",
      description: "A test",
      url: "https://example.com/test",
    })

    expect(og.title).toBe("Test Page")
    expect(og.description).toBe("A test")
    expect(og.url).toBe("https://example.com/test")
    expect(og.siteName).toBe(siteConfig.name)
    expect(og.type).toBe("website")
  })

  it("falls back to siteConfig ogImage when none provided", () => {
    const og = generateOpenGraphMetadata({
      title: "Test",
      description: "Test",
      url: "https://example.com",
    })

    expect(og.images[0]?.url).toBe(siteConfig.social.ogImage)
  })

  it("uses custom image when provided", () => {
    const og = generateOpenGraphMetadata({
      title: "Test",
      description: "Test",
      url: "https://example.com",
      image: "https://example.com/custom.png",
    })

    expect(og.images[0]?.url).toBe("https://example.com/custom.png")
  })

  it("uses localeTag over locale when provided", () => {
    const og = generateOpenGraphMetadata({
      title: "Test",
      description: "Test",
      url: "https://example.com",
      locale: "en",
      localeTag: "en-GB",
    })

    expect(og.locale).toBe("en-GB")
  })
})

describe("generateTwitterMetadata", () => {
  it("generates summary_large_image card", () => {
    const twitter = generateTwitterMetadata({
      title: "Test Page",
      description: "A test",
    })

    expect(twitter.card).toBe("summary_large_image")
    expect(twitter.title).toBe("Test Page")
    expect(twitter.description).toBe("A test")
  })
})

describe("ROBOTS_DIRECTIVES", () => {
  it("allows indexing while opting out of AI training", () => {
    const directives = ROBOTS_DIRECTIVES.split(", ")
    expect(directives).toContain("index")
    expect(directives).toContain("follow")
    expect(directives).toContain("noai")
    expect(directives).toContain("noimageai")
  })

  it("has no contradictory directive", () => {
    const directives = ROBOTS_DIRECTIVES.split(", ")
    expect(directives).not.toContain("noindex")
    expect(directives).not.toContain("nofollow")
  })
})

describe("serializeJsonLd", () => {
  it("escapes characters that could break out of a script element", () => {
    const serialized = serializeJsonLd({ bio: "</script><script>x()" })
    expect(serialized).not.toContain("</script>")
    expect(serialized).toContain("\\u003c")
  })

  it("stays parseable after escaping", () => {
    const value = { name: "a<b>c&d" }
    expect(JSON.parse(serializeJsonLd(value))).toEqual(value)
  })
})
