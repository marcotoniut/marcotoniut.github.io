import type { ChildProcessWithoutNullStreams } from "node:child_process"
import { spawn } from "node:child_process"
import { existsSync, mkdirSync } from "node:fs"
import { join } from "node:path"
import puppeteer from "puppeteer"

const BASE_URL = "http://localhost:3001"
const LOCAL_DIR = "local"

const now = new Date()
const year = now.getFullYear()
const month = String(now.getMonth() + 1).padStart(2, "0")
const filename = `Marco_Toniut_CV_${year}-${month}.pdf`
const outputPath = join(LOCAL_DIR, filename)

const ensureLocalDirectory = (directory: string): void => {
  if (!existsSync(directory)) {
    mkdirSync(directory, { recursive: true })
  }
}

const startDevServer = (): ChildProcessWithoutNullStreams => {
  const childProcess = spawn("pnpm", ["dev:pdf"], { stdio: "pipe" })

  if (!childProcess.stdout || !childProcess.stderr) {
    childProcess.kill()
    throw new Error("Failed to capture dev server output streams.")
  }

  childProcess.stdout.on("data", (chunk: Buffer) => {
    process.stdout.write(`[DEV STDOUT] ${chunk}`)
  })

  childProcess.stderr.on("data", (chunk: Buffer) => {
    process.stderr.write(`[DEV STDERR] ${chunk}`)
  })

  return childProcess as ChildProcessWithoutNullStreams
}

const waitForServerReady = async (
  devServer: ChildProcessWithoutNullStreams,
  expectedUrl: string,
): Promise<void> =>
  new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      reject(new Error("Timed out waiting for dev server to start."))
    }, 15_000)

    const handleStdout = (data: Buffer): void => {
      const output = data.toString()
      if (output.includes(`- Local:        ${expectedUrl}`)) {
        clearTimeout(timeout)
        devServer.stdout.off("data", handleStdout)
        resolve()
      }
    }

    const handleError = (error: Error): void => {
      clearTimeout(timeout)
      devServer.stdout.off("data", handleStdout)
      reject(new Error(`Failed to start dev server: ${error.message}`))
    }

    devServer.stdout.on("data", handleStdout)
    devServer.once("error", handleError)
  })

const generatePdf = async (pdfPath: string): Promise<void> => {
  console.log("Launching puppeteer process...")
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  })

  try {
    const page = await browser.newPage()
    console.log(`Navigating to ${BASE_URL}/en/cv/...`)

    try {
      await page.goto(`${BASE_URL}/en/cv/`, {
        waitUntil: "domcontentloaded",
        timeout: 30_000,
      })
    } catch (navigationError) {
      const message =
        navigationError instanceof Error
          ? navigationError.message
          : String(navigationError)
      console.error("Navigation error:", message)
      throw navigationError
    }

    console.log("Waiting for CV content to load...")
    const pageContent = await page.content()
    const bodyText = await page.evaluate(() => document.body.innerText)

    if (
      bodyText.includes("404") ||
      bodyText.includes("Not Found") ||
      bodyText.includes("Page not found")
    ) {
      console.error("ERROR: Page shows 404 or Not Found")
      console.error("Body text:", bodyText.substring(0, 200))
      throw new Error("CV page returned 404")
    }

    try {
      await page.waitForSelector("h1", { timeout: 10_000 })
    } catch (selectorError) {
      console.error("Failed to find h1 element")
      console.error(
        "Page HTML (first 500 chars):",
        pageContent.substring(0, 500),
      )
      throw selectorError
    }

    await page.waitForNetworkIdle({ idleTime: 500, timeout: 10_000 })

    console.log("Generating PDF...")
    await page.pdf({
      format: "A4",
      margin: { top: "1cm", right: 0, bottom: "0.5cm", left: 0 },
      path: pdfPath,
      printBackground: true,
    })

    console.log(`✅ Successfully saved PDF file to ${pdfPath}`)
  } finally {
    await browser.close()
  }
}

const main = async (): Promise<void> => {
  ensureLocalDirectory(LOCAL_DIR)

  console.log("Starting web server...")
  const devPdfProcess = startDevServer()

  try {
    await waitForServerReady(devPdfProcess, BASE_URL)
    await generatePdf(outputPath)
  } catch (error: unknown) {
    console.error("❌ Error while generating PDF:")
    if (error instanceof Error) {
      console.error(error)
    } else {
      console.error(String(error))
    }
  } finally {
    console.log("Killing dev process...")
    devPdfProcess.kill()
  }
}

void main().catch((error: unknown) => {
  console.error("❌ Unexpected error in print-cv script:")
  if (error instanceof Error) {
    console.error(error.message)
    console.error(error.stack)
  } else {
    console.error(String(error))
  }
  process.exitCode = 1
})
