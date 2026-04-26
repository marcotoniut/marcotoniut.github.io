import path from "node:path"
import { defineConfig, devices } from "@playwright/test"

// biome-ignore lint/correctness/noGlobalDirnameFilename: Playwright config runs in CJS context
const projectRoot = path.resolve(__dirname, "../..")

const port = Number.parseInt(process.env["PLAYWRIGHT_PORT"] ?? "8540", 10)
const host = process.env["PLAYWRIGHT_HOST"] ?? "127.0.0.1"
const baseURL = process.env["PLAYWRIGHT_BASE_URL"] ?? `http://${host}:${port}`
// biome-ignore lint/correctness/noGlobalDirnameFilename: Playwright config runs in CJS context
const artifactsDir = path.resolve(__dirname, ".playwright")
const ci = process.env["CI"]

export default defineConfig({
  timeout: 60_000,
  snapshotPathTemplate: "{testDir}/{testFileName}-snapshots/{arg}{ext}",
  expect: {
    toHaveScreenshot: {
      animations: "disabled",
      caret: "hide",
      scale: "css",
      maxDiffPixelRatio: 0.01,
    },
  },
  outputDir: `${artifactsDir}/test-results`,
  // biome-ignore lint/correctness/noGlobalDirnameFilename: Playwright config runs in CJS context
  testDir: __dirname,
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
    command: `cross-env BROWSER=none next dev --webpack -p ${port}`,
    cwd: projectRoot,
    url: `${baseURL}/en/`,
    reuseExistingServer: !ci,
    timeout: 120_000,
    stdout: "pipe",
    stderr: "pipe",
  },
})
