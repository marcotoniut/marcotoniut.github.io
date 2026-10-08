import path from "node:path"
import { defineConfig, devices } from "@playwright/test"

const projectRoot = path.resolve(import.meta.dirname, "../..")

const port = Number.parseInt(process.env["PLAYWRIGHT_PORT"] ?? "8540", 10)
const host = process.env["PLAYWRIGHT_HOST"] ?? "127.0.0.1"
const baseURL = process.env["PLAYWRIGHT_BASE_URL"] ?? `http://${host}:${port}`
const artifactsDir = path.resolve(import.meta.dirname, ".playwright")
const ci = process.env["CI"]

// CI uses higher tolerance to accommodate cross-platform font rendering
const maxDiffPixelRatio = ci ? 0.03 : 0.01

export default defineConfig({
  timeout: 60_000,
  snapshotPathTemplate: "{testDir}/{testFileName}-snapshots/{arg}{ext}",
  expect: {
    toHaveScreenshot: {
      animations: "disabled",
      caret: "hide",
      scale: "css",
      maxDiffPixelRatio,
      // Playwright's default per-pixel threshold (0.2 YIQ) cannot tell one
      // dark ground from another: the 404's full palette swap passed against
      // a stale baseline. 0.08 makes palette changes register locally, where
      // baselines are generated; CI keeps 0.2 because it compares
      // macOS-generated baselines on Linux, where text antialiasing alone
      // would blow the pixel-ratio budget at 0.08.
      threshold: ci ? 0.2 : 0.08,
    },
  },
  outputDir: `${artifactsDir}/test-results`,
  testDir: import.meta.dirname,
  fullyParallel: true,
  forbidOnly: Boolean(ci),
  retries: ci ? 2 : 0,
  ...(ci ? { maxFailures: 1 } : {}),
  reporter: [
    ["list"],
    [
      "html",
      { open: "never", outputFolder: `${artifactsDir}/playwright-report` },
    ],
  ],
  use: {
    baseURL,
    locale: "en-GB",
    timezoneId: "UTC",
    colorScheme: "dark",
    contextOptions: {
      reducedMotion: "reduce",
    },
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  webServer: {
    // Serves the `out/` export rather than `next dev`, so a11y and visual
    // results describe the artifact that ships. Requires `pnpm build` first.
    command: "node tests/e2e/static-server.ts",
    cwd: projectRoot,
    env: { PLAYWRIGHT_PORT: String(port), PLAYWRIGHT_HOST: host },
    url: `${baseURL}/en/`,
    reuseExistingServer: !ci,
    timeout: 60_000,
    stdout: "pipe",
    stderr: "pipe",
  },
})
