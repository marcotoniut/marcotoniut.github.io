// @vitest-environment happy-dom
import { afterEach, describe, expect, it, vi } from "vitest"
import { getStoredLocale, setStoredLocale } from "@/utils/language-storage"

const STORAGE_KEY = "marcotoniut-locale"

afterEach(() => {
  vi.restoreAllMocks()
  vi.unstubAllGlobals()
  localStorage.clear()
})

describe("setStoredLocale", () => {
  it("stores locale in localStorage", () => {
    setStoredLocale("en")
    expect(localStorage.getItem(STORAGE_KEY)).toBe("en")
  })

  it("overwrites previous value", () => {
    setStoredLocale("en")
    setStoredLocale("es")
    expect(localStorage.getItem(STORAGE_KEY)).toBe("es")
  })
})

describe("getStoredLocale", () => {
  it("returns stored locale", () => {
    localStorage.setItem(STORAGE_KEY, "en")
    expect(getStoredLocale()).toBe("en")
  })

  it("returns undefined when nothing stored", () => {
    expect(getStoredLocale()).toBeUndefined()
  })

  it("returns undefined for invalid locale", () => {
    localStorage.setItem(STORAGE_KEY, "fr")
    expect(getStoredLocale()).toBeUndefined()
  })

  it("returns undefined for empty string", () => {
    localStorage.setItem(STORAGE_KEY, "")
    expect(getStoredLocale()).toBeUndefined()
  })
})

describe("unavailable browser storage", () => {
  it("returns no locale when storage access throws", () => {
    vi.spyOn(window, "localStorage", "get").mockImplementation(() => {
      throw new DOMException("Storage access denied", "SecurityError")
    })
    expect(getStoredLocale()).toBeUndefined()
  })

  it("allows language changes when storage writes throw", () => {
    vi.spyOn(window, "localStorage", "get").mockImplementation(() => {
      throw new DOMException("Storage access denied", "SecurityError")
    })
    expect(() => setStoredLocale("es")).not.toThrow()
  })

  it("does not access storage outside the browser", () => {
    vi.stubGlobal("window", undefined)
    expect(getStoredLocale()).toBeUndefined()
    expect(() => setStoredLocale("es")).not.toThrow()
    expect(localStorage.getItem(STORAGE_KEY)).toBeNull()
  })
})
