import { describe, expect, it } from "vitest"
import { z } from "zod"

// Re-define schemas inline to test validation logic without importing
// sendGAEvent (which requires Next.js runtime).
const LinkClickParamsSchema = z.object({
  link_url: z.string().url(),
  link_text: z.string().optional(),
  link_location: z.enum([
    "header",
    "home_page",
    "cv_page",
    "footer",
    "profile",
    "carcinisation_project_page",
    "carcinisation_project_page_meta",
    "carcinisation_project_page_external_links",
  ]),
  locale: z.string(),
})

const BuyMeCoffeeParamsSchema = LinkClickParamsSchema.extend({
  link_location: z.enum(["header", "home_page"]),
})

const ExternalLinkParamsSchema = LinkClickParamsSchema.extend({
  link_type: z.enum(["github", "linkedin", "itch_io", "other"]),
})

const CVViewParamsSchema = z.object({
  locale: z.string(),
  referrer: z.string().optional(),
})

const ProjectLinkParamsSchema = LinkClickParamsSchema.extend({
  project_name: z.string(),
  link_type: z.enum(["github", "itch_io", "jam"]),
})

describe("LinkClickParamsSchema", () => {
  it("accepts valid params", () => {
    const result = LinkClickParamsSchema.safeParse({
      link_url: "https://example.com",
      link_location: "header",
      locale: "en",
    })
    expect(result.success).toBe(true)
  })

  it("rejects invalid URL", () => {
    const result = LinkClickParamsSchema.safeParse({
      link_url: "not-a-url",
      link_location: "header",
      locale: "en",
    })
    expect(result.success).toBe(false)
  })

  it("rejects unknown link_location", () => {
    const result = LinkClickParamsSchema.safeParse({
      link_url: "https://example.com",
      link_location: "unknown_page",
      locale: "en",
    })
    expect(result.success).toBe(false)
  })

  it("allows optional link_text", () => {
    const result = LinkClickParamsSchema.safeParse({
      link_url: "https://example.com",
      link_location: "footer",
      locale: "en",
      link_text: "Click here",
    })
    expect(result.success).toBe(true)
  })
})

describe("BuyMeCoffeeParamsSchema", () => {
  it("only allows header and home_page locations", () => {
    expect(
      BuyMeCoffeeParamsSchema.safeParse({
        link_url: "https://buymeacoffee.com/marcotoniut",
        link_location: "header",
        locale: "en",
      }).success,
    ).toBe(true)

    expect(
      BuyMeCoffeeParamsSchema.safeParse({
        link_url: "https://buymeacoffee.com/marcotoniut",
        link_location: "footer",
        locale: "en",
      }).success,
    ).toBe(false)
  })
})

describe("ExternalLinkParamsSchema", () => {
  it("accepts valid external link types", () => {
    for (const link_type of ["github", "linkedin", "itch_io", "other"]) {
      const result = ExternalLinkParamsSchema.safeParse({
        link_url: "https://github.com/marcotoniut",
        link_location: "footer",
        locale: "en",
        link_type,
      })
      expect(result.success, `link_type=${link_type}`).toBe(true)
    }
  })

  it("rejects unknown link_type", () => {
    const result = ExternalLinkParamsSchema.safeParse({
      link_url: "https://example.com",
      link_location: "footer",
      locale: "en",
      link_type: "twitter",
    })
    expect(result.success).toBe(false)
  })
})

describe("CVViewParamsSchema", () => {
  it("accepts locale only", () => {
    expect(CVViewParamsSchema.safeParse({ locale: "en" }).success).toBe(true)
  })

  it("accepts optional referrer", () => {
    expect(
      CVViewParamsSchema.safeParse({
        locale: "es",
        referrer: "https://linkedin.com",
      }).success,
    ).toBe(true)
  })
})

describe("ProjectLinkParamsSchema", () => {
  it("accepts valid project link", () => {
    const result = ProjectLinkParamsSchema.safeParse({
      link_url: "https://github.com/marcotoniut/carcinern",
      link_location: "carcinisation_project_page",
      locale: "en",
      project_name: "carcinisation",
      link_type: "github",
    })
    expect(result.success).toBe(true)
  })

  it("requires project_name", () => {
    const result = ProjectLinkParamsSchema.safeParse({
      link_url: "https://github.com/marcotoniut/carcinern",
      link_location: "carcinisation_project_page",
      locale: "en",
      link_type: "github",
    })
    expect(result.success).toBe(false)
  })
})
