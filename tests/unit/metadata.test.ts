import { describe, expect, it } from "vitest"
import { siteConfig } from "@/config/site"
import {
  generatePersonStructuredData,
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
