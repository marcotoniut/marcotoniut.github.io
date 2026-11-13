import { runInNewContext } from "node:vm"
import { afterEach, describe, expect, it, vi } from "vitest"
import {
  buildGtagBootstrapScript,
  denyGtagConsent,
  grantGtagConsent,
  gtagScriptUrl,
  sendGtagEvent,
} from "@/utils/gtag"

afterEach(() => {
  vi.unstubAllGlobals()
})

function runSnippet(localStorage: { getItem: (key: string) => string | null }) {
  const queued: unknown[][] = []
  const page: Record<string, unknown> = {
    dataLayer: { push: (args: IArguments) => queued.push(Array.from(args)) },
    localStorage,
  }
  page["window"] = page
  runInNewContext(buildGtagBootstrapScript("G-TEST123", "consent-key"), page)
  return queued
}

const deniedDefaults = {
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
}

describe("buildGtagBootstrapScript", () => {
  it("denies consent and holds the page view until the visitor allows analytics", () => {
    expect(runSnippet({ getItem: () => null })).toEqual([
      [
        "consent",
        "default",
        { ...deniedDefaults, analytics_storage: "denied" },
      ],
      ["js", expect.anything()],
      ["config", "G-TEST123", { send_page_view: false }],
    ])
  })

  it("restores consent for a visitor who allowed analytics earlier", () => {
    const queued = runSnippet({
      getItem: (key) => (key === "consent-key" ? "granted" : null),
    })
    expect(queued[0]).toEqual([
      "consent",
      "default",
      { ...deniedDefaults, analytics_storage: "granted" },
    ])
    expect(queued[2]).toEqual(["config", "G-TEST123", { send_page_view: true }])
  })

  it("stays denied when storage is unavailable", () => {
    const queued = runSnippet({
      getItem: () => {
        throw new Error("SecurityError")
      },
    })
    expect(queued[0]).toEqual([
      "consent",
      "default",
      { ...deniedDefaults, analytics_storage: "denied" },
    ])
  })
})

describe("gtagScriptUrl", () => {
  it("loads gtag.js for the measurement id", () => {
    expect(gtagScriptUrl("G-TEST123")).toBe(
      "https://www.googletagmanager.com/gtag/js?id=G-TEST123",
    )
  })
})

describe("sendGtagEvent", () => {
  it("forwards the event to gtag", () => {
    const gtag = vi.fn()
    vi.stubGlobal("window", { gtag })
    sendGtagEvent("cv_view", { locale: "en" })
    expect(gtag).toHaveBeenCalledExactlyOnceWith("event", "cv_view", {
      locale: "en",
    })
  })

  it("does nothing when analytics is not configured", () => {
    vi.stubGlobal("window", {})
    expect(() => sendGtagEvent("cv_view", { locale: "en" })).not.toThrow()
  })
})

describe("grantGtagConsent", () => {
  it("grants analytics storage and sends the page view the snippet held back", () => {
    const gtag = vi.fn()
    vi.stubGlobal("window", { gtag })
    grantGtagConsent()
    expect(gtag.mock.calls).toEqual([
      ["consent", "update", { analytics_storage: "granted" }],
      ["event", "page_view"],
    ])
  })
})

describe("denyGtagConsent", () => {
  it("denies analytics storage and expires the GA cookies", () => {
    const gtag = vi.fn()
    const written: string[] = []
    vi.stubGlobal("window", {
      gtag,
      location: { hostname: "www.marcotoniut.com" },
    })
    vi.stubGlobal("document", {
      get cookie() {
        return "_ga=GA1.1.1; marcotoniut-theme=dark; _ga_TEST=GS1.1.1"
      },
      set cookie(value: string) {
        written.push(value)
      },
    })
    denyGtagConsent()
    expect(gtag).toHaveBeenCalledExactlyOnceWith("consent", "update", {
      analytics_storage: "denied",
    })
    expect(written).toEqual([
      "_ga=; Max-Age=0; path=/",
      "_ga=; Max-Age=0; path=/; domain=www.marcotoniut.com",
      "_ga=; Max-Age=0; path=/; domain=marcotoniut.com",
      "_ga_TEST=; Max-Age=0; path=/",
      "_ga_TEST=; Max-Age=0; path=/; domain=www.marcotoniut.com",
      "_ga_TEST=; Max-Age=0; path=/; domain=marcotoniut.com",
    ])
  })
})
