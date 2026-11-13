import { expect, test } from "./utils/runtime-errors"

const THEME_KEY = "marcotoniut-theme"
const LOCALE_KEY = "marcotoniut-locale"

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
})
