import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import {
  trackBuyMeCoffeeClick,
  trackContactNavigation,
  trackCVNavigation,
  trackCVView,
  trackExternalLinkClick,
  trackProjectLinkClick,
  trackProjectNavigation,
} from "@/utils/analytics"
import { sendGtagEvent } from "@/utils/gtag"

vi.mock("@/utils/gtag", () => ({ sendGtagEvent: vi.fn() }))

beforeEach(() => {
  vi.clearAllMocks()
})

afterEach(() => {
  vi.unstubAllGlobals()
})

describe("Buy Me a Coffee tracking", () => {
  it("adds the fixed destination URL", () => {
    trackBuyMeCoffeeClick({ link_location: "footer", locale: "es" })
    expect(sendGtagEvent).toHaveBeenCalledExactlyOnceWith(
      "buy_me_coffee_click",
      {
        event_category: "engagement",
        event_label: "buy_me_coffee",
        link_location: "footer",
        link_url: "https://buymeacoffee.com/marcotoniut",
        locale: "es",
      },
    )
  })
})

describe("CV view tracking", () => {
  it("sends the referrer when there is one", () => {
    vi.stubGlobal("window", {})
    vi.stubGlobal("document", { referrer: "https://example.com/" })
    trackCVView("en")
    expect(sendGtagEvent).toHaveBeenCalledExactlyOnceWith("cv_view", {
      event_category: "engagement",
      event_label: "cv_page_view",
      locale: "en",
      referrer: "https://example.com/",
    })
  })

  it("leaves out the referrer outside the browser", () => {
    trackCVView("en")
    expect(sendGtagEvent).toHaveBeenCalledExactlyOnceWith("cv_view", {
      event_category: "engagement",
      event_label: "cv_page_view",
      locale: "en",
    })
  })

  it("leaves out an empty referrer", () => {
    vi.stubGlobal("window", {})
    vi.stubGlobal("document", { referrer: "" })
    trackCVView("es")
    expect(sendGtagEvent).toHaveBeenCalledExactlyOnceWith("cv_view", {
      event_category: "engagement",
      event_label: "cv_page_view",
      locale: "es",
    })
  })
})

describe("project link tracking", () => {
  it("labels the event with the project and link type", () => {
    trackProjectLinkClick({
      link_location: "carcinisation_project_page_external_links",
      link_type: "itch_io",
      link_url: "https://example.itch.io/carcinisation",
      locale: "en",
      project_name: "carcinisation",
    })
    expect(sendGtagEvent).toHaveBeenCalledWith(
      "project_link_click",
      expect.objectContaining({ event_label: "carcinisation_itch_io" }),
    )
  })
})

describe("internal navigation tracking", () => {
  it("names the destination in each event", () => {
    trackCVNavigation({ locale: "en", from_page: "home" })
    trackContactNavigation({ locale: "en", from_page: "home" })
    trackProjectNavigation({
      locale: "en",
      from_page: "home",
      project_name: "sonicthames",
    })
    expect(vi.mocked(sendGtagEvent).mock.calls).toEqual([
      [
        "cv_navigation",
        {
          event_category: "navigation",
          event_label: "internal_cv_link",
          locale: "en",
          from_page: "home",
        },
      ],
      [
        "contact_navigation",
        {
          event_category: "navigation",
          event_label: "internal_contact_link",
          locale: "en",
          from_page: "home",
        },
      ],
      [
        "project_navigation",
        {
          event_category: "navigation",
          event_label: "internal_sonicthames_link",
          locale: "en",
          from_page: "home",
          project_name: "sonicthames",
        },
      ],
    ])
  })
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
