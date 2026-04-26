import { expect, test } from "@playwright/test"
import { waitForVisualStability } from "./utils/visual-stability"

const ROUTE_SNAPSHOTS: Array<{
  path: string
  heading: RegExp | string
  snapshot: string
  fullPage?: boolean
}> = [
  {
    path: "/en/",
    heading: /marco toniut/i,
    snapshot: "home.png",
  },
  {
    path: "/en/cv/",
    heading: /marco stefano toniut/i,
    snapshot: "cv.png",
  },
  {
    path: "/en/contact/",
    heading: /get in touch/i,
    snapshot: "contact.png",
  },
  {
    path: "/en/projects/carcinisation/",
    heading: /carcinisation/i,
    snapshot: "carcinisation.png",
  },
  {
    path: "/en/projects/sonicthames/",
    heading: /sonicthames/i,
    snapshot: "sonicthames.png",
  },
]

const MOBILE_VIEWPORT = { width: 390, height: 844 }

const MOBILE_ROUTE_SNAPSHOTS: Array<{
  path: string
  heading: RegExp | string
  snapshot: string
}> = [
  {
    path: "/en/",
    heading: /marco toniut/i,
    snapshot: "mobile-home.png",
  },
  {
    path: "/en/cv/",
    heading: /marco stefano toniut/i,
    snapshot: "mobile-cv.png",
  },
]

test.describe("@visual", () => {
  test.use({
    viewport: { width: 1280, height: 800 },
  })

  test("pages remain visually stable", async ({ page }) => {
    for (const route of ROUTE_SNAPSHOTS) {
      await page.goto(route.path, { waitUntil: "load" })
      await expect(page.getByRole("main")).toBeVisible({ timeout: 15_000 })
      await expect(
        page.getByRole("heading", { name: route.heading }),
      ).toBeVisible({ timeout: 15_000 })
      await waitForVisualStability(page)
      await expect(page).toHaveScreenshot(route.snapshot, {
        fullPage: route.fullPage ?? true,
      })
    }
  })

  test("home page light theme remains visually stable", async ({ page }) => {
    await page.addInitScript(() => {
      window.localStorage.setItem("marcotoniut-theme", "light")
    })
    await page.goto("/en/", { waitUntil: "load" })
    await expect(page.getByRole("main")).toBeVisible({ timeout: 15_000 })
    await expect(
      page.getByRole("heading", { name: /marco toniut/i }),
    ).toBeVisible({ timeout: 15_000 })
    await waitForVisualStability(page)
    await expect(page).toHaveScreenshot("home--light.png", {
      fullPage: true,
    })
  })

  test("mobile viewports remain visually stable", async ({ page }) => {
    await page.setViewportSize(MOBILE_VIEWPORT)
    for (const route of MOBILE_ROUTE_SNAPSHOTS) {
      await page.goto(route.path, { waitUntil: "load" })
      await expect(page.getByRole("main")).toBeVisible({ timeout: 15_000 })
      await expect(
        page.getByRole("heading", { name: route.heading }),
      ).toBeVisible({ timeout: 15_000 })
      await waitForVisualStability(page)
      await expect(page).toHaveScreenshot(route.snapshot, {
        fullPage: true,
      })
    }
  })

  test("not-found page remains visually stable", async ({ page }) => {
    await page.goto("/en/nonexistent-page/", {
      waitUntil: "load",
    })
    await expect(page.getByRole("heading", { name: /404/i })).toBeVisible({
      timeout: 15_000,
    })
    await waitForVisualStability(page)
    await expect(page).toHaveScreenshot("not-found.png", {
      fullPage: true,
    })
  })
})
