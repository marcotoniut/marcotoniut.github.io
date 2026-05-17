// @vitest-environment happy-dom
import { afterEach, describe, expect, it } from "vitest"
import { getStoredLocale, setStoredLocale } from "@/utils/language-storage"

const STORAGE_KEY = "marcotoniut-locale"

afterEach(() => {
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
