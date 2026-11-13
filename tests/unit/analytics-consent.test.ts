import { afterEach, describe, expect, it, vi } from "vitest"

const gtag = vi.hoisted(() => ({
  denyGtagConsent: vi.fn(),
  grantGtagConsent: vi.fn(),
}))
vi.mock("@/utils/gtag", () => gtag)

const KEY = "marcotoniut-analytics-consent"

function memoryStorage(initial: Record<string, string> = {}) {
  const values = new Map(Object.entries(initial))
  return {
    getItem: (key: string) => values.get(key) ?? null,
    setItem: (key: string, value: string) => {
      values.set(key, value)
    },
    removeItem: (key: string) => {
      values.delete(key)
    },
  }
}

async function loadConsent(localStorage: unknown) {
  vi.stubGlobal("window", { localStorage })
  vi.resetModules()
  return import("@/utils/analytics-consent")
}

afterEach(() => {
  vi.unstubAllGlobals()
  vi.clearAllMocks()
})

describe("analytics consent", () => {
  it("is undecided until the visitor answers", async () => {
    const consent = await loadConsent(memoryStorage())
    expect(consent.getAnalyticsConsent()).toBe("undecided")
  })

  it("reads an earlier answer and ignores values it does not know", async () => {
    expect(
      (
        await loadConsent(memoryStorage({ [KEY]: "denied" }))
      ).getAnalyticsConsent(),
    ).toBe("denied")
    expect(
      (
        await loadConsent(memoryStorage({ [KEY]: "maybe" }))
      ).getAnalyticsConsent(),
    ).toBe("undecided")
  })

  it("stores an allow, grants consent and tells subscribers", async () => {
    const storage = memoryStorage()
    const consent = await loadConsent(storage)
    const listener = vi.fn()
    consent.subscribeToAnalyticsConsent(listener)

    consent.setAnalyticsConsent("granted")

    expect(storage.getItem(KEY)).toBe("granted")
    expect(consent.getAnalyticsConsent()).toBe("granted")
    expect(gtag.grantGtagConsent).toHaveBeenCalledOnce()
    expect(gtag.denyGtagConsent).not.toHaveBeenCalled()
    expect(listener).toHaveBeenCalledOnce()
  })

  it("stores a decline and denies consent", async () => {
    const storage = memoryStorage()
    const consent = await loadConsent(storage)
    consent.setAnalyticsConsent("denied")
    expect(storage.getItem(KEY)).toBe("denied")
    expect(gtag.denyGtagConsent).toHaveBeenCalledOnce()
  })

  it("forgets the answer to ask again, denying consent meanwhile", async () => {
    const storage = memoryStorage({ [KEY]: "granted" })
    const consent = await loadConsent(storage)
    consent.setAnalyticsConsent("undecided")
    expect(storage.getItem(KEY)).toBeNull()
    expect(consent.getAnalyticsConsent()).toBe("undecided")
    expect(gtag.denyGtagConsent).toHaveBeenCalledOnce()
  })

  it("keeps the answer for the page when storage is unavailable", async () => {
    const unavailable = () => {
      throw new Error("SecurityError")
    }
    const consent = await loadConsent({
      getItem: unavailable,
      setItem: unavailable,
      removeItem: unavailable,
    })
    consent.setAnalyticsConsent("granted")
    expect(consent.getAnalyticsConsent()).toBe("granted")
  })

  it("stops telling a subscriber once it unsubscribes", async () => {
    const consent = await loadConsent(memoryStorage())
    const listener = vi.fn()
    consent.subscribeToAnalyticsConsent(listener)()
    consent.setAnalyticsConsent("denied")
    expect(listener).not.toHaveBeenCalled()
  })
})
