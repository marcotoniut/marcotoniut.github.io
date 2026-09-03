import type { Page } from "@playwright/test"

export const waitForVisualStability = async (page: Page): Promise<void> => {
  // data-theme is only set once the blocking theme script has run and React
  // has hydrated, so it doubles as a hydration signal.
  await page
    .waitForFunction(
      () => document.documentElement.dataset["theme"] !== undefined,
      { timeout: 10_000 },
    )
    .catch(() => {
      // Pages without ThemeProvider or pre-hydration timeout
    })

  await page.evaluate(async () => {
    if (document.fonts) {
      await Promise.race([
        document.fonts.ready,
        new Promise((resolve) => setTimeout(resolve, 5000)),
      ])
    }

    await Promise.all(
      Array.from(document.images, async (image) => {
        if (image.complete) {
          return
        }
        await new Promise<void>((resolve) => {
          image.addEventListener("load", () => resolve(), { once: true })
          image.addEventListener("error", () => resolve(), { once: true })
        })
      }),
    )
  })
}
