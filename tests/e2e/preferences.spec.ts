import type { Page } from "@playwright/test"
import { expect, test } from "./utils/runtime-errors"

const THEME_KEY = "marcotoniut-theme"
const LOCALE_KEY = "marcotoniut-locale"
const CONSENT_KEY = "marcotoniut-analytics-consent"

async function recordGtagLoads(page: Page): Promise<string[]> {
  const loads: string[] = []
  await page.route("https://www.googletagmanager.com/**", (route) => {
    loads.push(route.request().url())
    return route.fulfill({ body: "", contentType: "text/javascript" })
  })
  return loads
}

const storedConsent = (page: Page) =>
  page.evaluate((key) => localStorage.getItem(key), CONSENT_KEY)

const queuedCommands = (page: Page) =>
  page.evaluate(() =>
    Array.from(window.dataLayer ?? [], (entry) =>
      Array.from(entry, (value: unknown) => value),
    ),
  )

test.describe("@preferences", () => {
  test("theme choice survives reload and overrides the OS preference", async ({
    page,
  }) => {
    await page.emulateMedia({ colorScheme: "dark" })
    await page.goto("/en/")
    await page.getByRole("button", { name: "Dark mode" }).click()
    await expect(page.locator("html")).toHaveAttribute("data-theme", "light")
    await expect
      .poll(() => page.evaluate((key) => localStorage.getItem(key), THEME_KEY))
      .toBe("light")

    await page.reload()
    await expect(page.getByRole("button", { name: "Light mode" })).toBeVisible()
    await expect(page.locator("html")).toHaveAttribute("data-theme", "light")
    await expect
      .poll(() => page.evaluate((key) => localStorage.getItem(key), THEME_KEY))
      .toBe("light")
  })

  for (const storedTheme of ["light", "dark"] as const) {
    test(`stored ${storedTheme} theme overrides the opposite OS preference before hydration`, async ({
      page,
    }) => {
      await page.emulateMedia({
        colorScheme: storedTheme === "light" ? "dark" : "light",
      })
      await page.addInitScript(
        ({ key, value }) => localStorage.setItem(key, value),
        {
          key: THEME_KEY,
          value: storedTheme,
        },
      )
      await page.route("**/*.js", (route) => route.abort())
      await page.goto("/en/", { waitUntil: "domcontentloaded" })
      await expect(page.locator("html")).toHaveAttribute(
        "data-theme",
        storedTheme,
      )
    })
  }

  test("language choice survives reload and controls the CV redirect", async ({
    page,
  }) => {
    await page.goto("/en/contact/")
    await expect(page.getByRole("button", { name: "Dark mode" })).toBeVisible()
    await page
      .getByRole("navigation", { name: "Language" })
      .getByRole("link", { name: "ES", exact: true })
      .click()
    await expect(page).toHaveURL(/\/es\/contact\/$/)
    const esLink = page
      .getByRole("navigation", { name: "Idioma" })
      .getByRole("link", { name: "ES", exact: true })
    await expect(esLink).toHaveAttribute("aria-current", "page")
    await expect
      .poll(() => page.evaluate((key) => localStorage.getItem(key), LOCALE_KEY))
      .toBe("es")

    await page.reload()
    await expect(esLink).toHaveAttribute("aria-current", "page")
    await expect
      .poll(() => page.evaluate((key) => localStorage.getItem(key), LOCALE_KEY))
      .toBe("es")

    await page.goto("/cv/")
    await expect(page).toHaveURL(/\/es\/cv\/$/)
    await expect(esLink).toHaveAttribute("aria-current", "page")
  })

  test("analytics waits for consent, and an allow is remembered", async ({
    page,
  }) => {
    const gtagLoads = await recordGtagLoads(page)
    await page.goto("/en/")
    const banner = page.getByRole("region", { name: "Analytics cookies" })
    await expect(banner).toBeVisible()
    await page.evaluate(
      () => new Promise((resolve) => requestIdleCallback(resolve)),
    )
    expect(gtagLoads).toEqual([])

    await banner.getByRole("button", { name: "Allow" }).click()
    await expect(banner).toBeHidden()
    await expect.poll(() => gtagLoads.length).toBe(1)
    expect(await storedConsent(page)).toBe("granted")
    expect(await queuedCommands(page)).toEqual(
      expect.arrayContaining([
        ["config", expect.any(String), { send_page_view: false }],
        ["consent", "update", { analytics_storage: "granted" }],
        ["event", "page_view"],
      ]),
    )

    await page.reload()
    await expect.poll(() => gtagLoads.length).toBe(2)
    await expect(banner).toBeHidden()
    expect(await queuedCommands(page)).toContainEqual([
      "config",
      expect.any(String),
      { send_page_view: true },
    ])
  })

  test("a decline loads nothing, and the footer asks again", async ({
    page,
  }) => {
    const gtagLoads = await recordGtagLoads(page)
    await page.goto("/en/")
    const { hostname } = new URL(page.url())
    await page
      .context()
      .addCookies([
        { name: "_ga", value: "GA1.1.1", domain: hostname, path: "/" },
      ])
    const banner = page.getByRole("region", { name: "Analytics cookies" })
    await banner.getByRole("button", { name: "No thanks" }).click()
    await expect(banner).toBeHidden()
    expect(await storedConsent(page)).toBe("denied")
    const cookieNames = async () =>
      (await page.context().cookies()).map((cookie) => cookie.name)
    await expect.poll(cookieNames).not.toContain("_ga")

    await page.reload()
    await expect(page.getByRole("button", { name: "Dark mode" })).toBeVisible()
    await expect(banner).toBeHidden()

    await page.getByRole("button", { name: "Cookie preferences" }).click()
    await expect(banner).toBeVisible()
    expect(await storedConsent(page)).toBeNull()
    expect(gtagLoads).toEqual([])
  })
})
