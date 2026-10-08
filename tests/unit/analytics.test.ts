import { sendGAEvent } from "@next/third-parties/google"
import { beforeEach, describe, expect, it, vi } from "vitest"
import { trackExternalLinkClick } from "@/utils/analytics"

vi.mock("@next/third-parties/google", () => ({ sendGAEvent: vi.fn() }))

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
    expect(sendGAEvent).toHaveBeenCalledExactlyOnceWith(
      "event",
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
    expect(sendGAEvent).not.toHaveBeenCalled()
  })
})
