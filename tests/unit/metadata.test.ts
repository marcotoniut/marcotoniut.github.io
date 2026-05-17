import { describe, expect, it } from "vitest"
import { siteConfig } from "@/config/site"
import {
  generateOpenGraphMetadata,
  generatePersonStructuredData,
  generateTwitterMetadata,
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
    expect(data.sameAs).toEqual(expect.arrayContaining(siteConfig.sameAs))
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

    expect(og?.title).toBe("Test Page")
    expect(og?.description).toBe("A test")
    expect(og?.url).toBe("https://example.com/test")
    expect(og?.siteName).toBe(siteConfig.name)
    expect(og?.type).toBe("website")
  })

  it("falls back to siteConfig ogImage when none provided", () => {
    const og = generateOpenGraphMetadata({
      title: "Test",
      description: "Test",
      url: "https://example.com",
    })

    const images = og?.images as Array<{ url: string }>
    expect(images?.[0]?.url).toBe(siteConfig.social.ogImage)
  })

  it("uses custom image when provided", () => {
    const og = generateOpenGraphMetadata({
      title: "Test",
      description: "Test",
      url: "https://example.com",
      image: "https://example.com/custom.png",
    })

    const images = og?.images as Array<{ url: string }>
    expect(images?.[0]?.url).toBe("https://example.com/custom.png")
  })

  it("uses localeTag over locale when provided", () => {
    const og = generateOpenGraphMetadata({
      title: "Test",
      description: "Test",
      url: "https://example.com",
      locale: "en",
      localeTag: "en-GB",
    })

    expect(og?.locale).toBe("en-GB")
  })
})

describe("generateTwitterMetadata", () => {
  it("generates summary_large_image card", () => {
    const twitter = generateTwitterMetadata({
      title: "Test Page",
      description: "A test",
    })

    expect(twitter?.card).toBe("summary_large_image")
    expect(twitter?.title).toBe("Test Page")
    expect(twitter?.description).toBe("A test")
  })
})
