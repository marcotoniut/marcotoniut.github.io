const { spawn } = require("child_process")
const fs = require("fs")
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
        15000
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
      executablePath: puppeteer.executablePath("chrome"),
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-gpu",
        "--no-first-run",
        "--no-zygote",
        "--single-process",
      ],
    })

    const page = await browser.newPage()

    console.log(`Navigating to ${BASE_URL}/cv...`)
    await page.goto(`${BASE_URL}/cv`, {
      waitUntil: "networkidle0",
      timeout: 60000,
    })

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
