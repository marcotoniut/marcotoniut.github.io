import { beforeEach, describe, expect, it, vi } from "vitest"
import { trackExternalLinkClick } from "@/utils/analytics"
import { sendGtagEvent } from "@/utils/gtag"

vi.mock("@/utils/gtag", () => ({ sendGtagEvent: vi.fn() }))

beforeEach(() => {
  vi.clearAllMocks()
})

describe("external link tracking", () => {
  it("sends the validated URL, locale and link category", () => {
    trackExternalLinkClick({
      link_type: "github",
      link_location: "footer",
      link_url: "https://github.com/marcotoniut",
      locale: "en",
    })
    expect(sendGtagEvent).toHaveBeenCalledExactlyOnceWith(
      "external_link_click",
      {
        event_category: "engagement",
        event_label: "github",
        link_type: "github",
        link_location: "footer",
        link_url: "https://github.com/marcotoniut",
        locale: "en",
      },
    )
  })

  it("rejects invalid URLs before sending an event", () => {
    expect(() =>
      trackExternalLinkClick({
        link_type: "github",
        link_location: "footer",
        link_url: "invalid",
        locale: "en",
      }),
    ).toThrow()
    expect(sendGtagEvent).not.toHaveBeenCalled()
  })
})
