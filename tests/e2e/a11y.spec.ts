import AxeBuilder from "@axe-core/playwright"
import { expect, test } from "@playwright/test"
import { waitForVisualStability } from "./utils/visual-stability"

const ROUTES = [
  { path: "/en/", heading: /marco toniut/i, name: "home (en)" },
  { path: "/en/cv/", heading: /marco stefano toniut/i, name: "cv (en)" },
  {
    path: "/en/contact/",
    heading: /get in touch/i,
    name: "contact (en)",
  },
  {
    path: "/en/projects/carcinisation/",
    heading: /carcinisation/i,
    name: "carcinisation (en)",
    // Game Boy palette intentionally uses low-contrast retro colours
    disableRules: ["color-contrast"],
  },
  {
    path: "/en/projects/sonicthames/",
    heading: /sonicthames/i,
    name: "sonicthames (en)",
  },
  { path: "/es/", heading: /marco toniut/i, name: "home (es)" },
  {
    path: "/es/cv/",
    heading: /marco stefano toniut/i,
    name: "cv (es)",
  },
  {
    path: "/es/contact/",
    heading: /ponete en contacto/i,
    name: "contact (es)",
  },
  {
    path: "/es/projects/carcinisation/",
    heading: /carcinisation/i,
    name: "carcinisation (es)",
    disableRules: ["color-contrast"],
  },
  {
    path: "/es/projects/sonicthames/",
    heading: /sonicthames/i,
    name: "sonicthames (es)",
  },
] as const

// Run sequentially — dev server can't handle 8 parallel axe audits
test.describe.configure({ mode: "serial" })

test.describe("@a11y", () => {
  test.use({ viewport: { width: 1280, height: 800 } })

  for (const route of ROUTES) {
    test(`${route.name} page has no critical a11y violations`, async ({
      page,
    }) => {
      await page.goto(route.path, { waitUntil: "load" })
      await expect(page.getByRole("main")).toBeVisible({ timeout: 15_000 })
      await expect(
        page.getByRole("heading", { name: route.heading }),
      ).toBeVisible({ timeout: 15_000 })
      await waitForVisualStability(page)

      let builder = new AxeBuilder({ page }).withTags([
        "wcag2a",
        "wcag2aa",
        "wcag21a",
        "wcag21aa",
      ])
      if ("disableRules" in route && route.disableRules) {
        builder = builder.disableRules(
          route.disableRules as unknown as string[],
        )
      }
      const results = await builder.analyze()

      const critical = results.violations.filter(
        (v) => v.impact === "critical" || v.impact === "serious",
      )

      if (critical.length > 0) {
        const summary = critical
          .map(
            (v) =>
              `[${v.impact}] ${v.id}: ${v.description} (${v.nodes.length} instance${v.nodes.length === 1 ? "" : "s"})`,
          )
          .join("\n")
        expect(
          critical,
          `Critical/serious a11y violations found:\n${summary}`,
        ).toEqual([])
      }
    })
  }

  test("404 page has no critical a11y violations", async ({ page }) => {
    await page.goto("/en/nonexistent-page/", { waitUntil: "load" })
    await expect(page.getByRole("heading", { name: /404/i })).toBeVisible({
      timeout: 15_000,
    })
    await waitForVisualStability(page)

    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze()

    const critical = results.violations.filter(
      (v) => v.impact === "critical" || v.impact === "serious",
    )

    expect(critical, "Expected no critical/serious a11y violations").toEqual([])
  })

  test("pages have correct landmark structure", async ({ page }) => {
    for (const route of ROUTES) {
      await page.goto(route.path, { waitUntil: "load" })
      await expect(page.getByRole("main")).toBeVisible({ timeout: 15_000 })

      const main = page.getByRole("main")
      await expect(main).toHaveCount(1)

      const headings = page.getByRole("heading")
      expect(await headings.count()).toBeGreaterThan(0)
    }
  })

  test("interactive elements are keyboard accessible", async ({ page }) => {
    await page.goto("/en/", { waitUntil: "load" })
    await expect(page.getByRole("main")).toBeVisible({ timeout: 15_000 })
    await waitForVisualStability(page)

    // Tab through interactive elements — verify focus is reachable
    await page.keyboard.press("Tab")
    const firstFocused = await page.evaluate(
      () => document.activeElement?.tagName,
    )
    expect(firstFocused).toBeTruthy()

    // All links should have accessible names
    const links = page.getByRole("link")
    const linkCount = await links.count()
    for (let i = 0; i < linkCount; i++) {
      const link = links.nth(i)
      const name = await link.getAttribute("aria-label")
      const text = await link.textContent()
      const about = await link.getAttribute("about")
      expect(
        name ?? text?.trim() ?? about,
        `Link ${i} should have accessible name`,
      ).toBeTruthy()
    }
  })
})
