import { runInNewContext } from "node:vm"
import { afterEach, describe, expect, it, vi } from "vitest"
import {
  buildGtagBootstrapScript,
  gtagScriptUrl,
  sendGtagEvent,
} from "@/utils/gtag"

afterEach(() => {
  vi.unstubAllGlobals()
})

describe("buildGtagBootstrapScript", () => {
  it("queues the js and config commands for gtag.js to drain", () => {
    const queued: unknown[][] = []
    const page: Record<string, unknown> = {
      dataLayer: { push: (args: IArguments) => queued.push(Array.from(args)) },
    }
    page["window"] = page

    runInNewContext(buildGtagBootstrapScript("G-TEST123"), page)

    expect(queued.map(([command]) => command)).toEqual(["js", "config"])
    expect(queued[1]).toEqual(["config", "G-TEST123"])
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
