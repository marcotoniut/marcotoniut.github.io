const { spawn } = require("node:child_process")
const fs = require("node:fs")
const puppeteer = require("puppeteer")

const BASE_URL = `http://localhost:3001`
const LOCAL_DIR = "./local"

const now = new Date()
const year = now.getFullYear()
const month = String(now.getMonth() + 1).padStart(2, "0")
const filename = `Marco_Toniut_CV_${year}-${month}.pdf`
const path = `${LOCAL_DIR}/${filename}`

;(async () => {
  if (!fs.existsSync(LOCAL_DIR)) {
    fs.mkdirSync(LOCAL_DIR)
  }

  console.log("Starting web server...")
  const devPdfProcess = spawn("pnpm", ["dev:pdf"])

  devPdfProcess.stdout.on("data", (data) => {
    process.stdout.write(`[DEV STDOUT] ${data}`)
  })

  devPdfProcess.stderr.on("data", (data) => {
    process.stderr.write(`[DEV STDERR] ${data}`)
  })

  try {
    await new Promise((resolve, reject) => {
      const timeout = setTimeout(
        () => reject(new Error("Timed out waiting for dev server to start.")),
        15000,
      )

      devPdfProcess.stdout.on("data", (data) => {
        const str = data.toString()
        if (str.includes(`- Local:        ${BASE_URL}`)) {
          clearTimeout(timeout)
          resolve()
        }
      })

      devPdfProcess.on("error", (err) => {
        reject(new Error(`Failed to start dev server: ${err.message}`))
      })
    })

    console.log("Launching puppeteer process...")
    const browser = await puppeteer.launch({
      headless: "new",
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    })

    const page = await browser.newPage()

    console.log(`Navigating to ${BASE_URL}/en/cv/...`)

    // Try navigation with more forgiving wait condition
    try {
      await page.goto(`${BASE_URL}/en/cv/`, {
        waitUntil: "domcontentloaded",
        timeout: 30000,
      })
    } catch (error) {
      console.error("Navigation error:", error.message)
      throw error
    }

    // Wait for the CV content to be fully rendered
    console.log("Waiting for CV content to load...")

    // Debug: Check what's actually on the page
    const pageContent = await page.content()
    console.log("Page title:", await page.title())

    // Check if it's a 404 page
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

    // Wait for h1 with better error message
    try {
      await page.waitForSelector("h1", { timeout: 10000 })
    } catch (error) {
      console.error("Failed to find h1 element")
      console.error(
        "Page HTML (first 500 chars):",
        pageContent.substring(0, 500),
      )
      throw error
    }

    // Wait for network to be idle
    await page.waitForNetworkIdle({ idleTime: 500, timeout: 10000 })

    console.log("Generating PDF...")
    await page.pdf({
      format: "A4",
      margin: { top: "1cm", right: 0, bottom: "0.5cm", left: 0 },
      path,
      printBackground: true,
    })

    await browser.close()

    console.log(`✅ Successfully saved PDF file to ${path}`)
  } catch (error) {
    console.error("❌ Error while generating PDF:")
    console.error(error)
  } finally {
    console.log("Killing dev process...")
    devPdfProcess.kill()
  }
})()
