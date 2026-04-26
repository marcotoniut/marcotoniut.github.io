import type { Page } from "@playwright/test"

export const waitForVisualStability = async (page: Page): Promise<void> => {
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

  await page.addStyleTag({
    content: `
      nextjs-portal,
      [data-nextjs-dev-overlay="true"] {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        pointer-events: none !important;
      }
    `,
  })
  await page.waitForTimeout(200)
  await page.evaluate(() => {
    for (const selector of [
      "nextjs-portal",
      '[data-nextjs-dev-overlay="true"]',
    ]) {
      for (const element of document.querySelectorAll(selector)) {
        element.remove()
      }
    }
  })
  await page.waitForTimeout(50)
}
