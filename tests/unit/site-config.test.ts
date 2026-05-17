import { describe, expect, it } from "vitest"
import { siteConfig } from "@/config/site"

describe("siteConfig", () => {
  it("has required top-level fields", () => {
    expect(siteConfig.name).toBeTruthy()
    expect(siteConfig.baseUrl).toBeTruthy()
    expect(siteConfig.description).toBeTruthy()
    expect(siteConfig.jobTitle).toBeTruthy()
  })

  it("baseUrl is a valid HTTPS URL without trailing slash", () => {
    expect(siteConfig.baseUrl).toMatch(/^https:\/\//)
    expect(siteConfig.baseUrl).not.toMatch(/\/$/)
  })

  it("author has name and url", () => {
    expect(siteConfig.author.name).toBeTruthy()
    expect(siteConfig.author.url).toMatch(/^https:\/\//)
  })

  it("social links are valid URLs", () => {
    for (const [key, url] of Object.entries(siteConfig.social)) {
      expect(url, `social.${key}`).toMatch(/^https:\/\//)
    }
  })

  it("sameAs entries match social links", () => {
    expect(siteConfig.sameAs).toContain(siteConfig.social.github)
    expect(siteConfig.sameAs).toContain(siteConfig.social.itch)
    expect(siteConfig.sameAs).toContain(siteConfig.social.linkedin)
  })

  it("has at least 3 keywords", () => {
    expect(siteConfig.keywords.length).toBeGreaterThanOrEqual(3)
  })
})
