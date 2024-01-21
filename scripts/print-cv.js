const { spawn } = require("child_process");
const fs = require("fs");
const puppeteer = require("puppeteer");

const BASE_URL = `http://localhost:3001`;
const LOCAL_DIR = "./local";
const path = `${LOCAL_DIR}/Marco Toniut (CV).pdf`;

(async () => {
  if (!fs.existsSync(LOCAL_DIR)) {
    fs.mkdirSync(LOCAL_DIR);
  }

  console.log("Starting web server...");
  const devPdfProcess = spawn("yarn", ["dev:pdf"]);
  try {
    await new Promise((resolve) => {
      devPdfProcess.stdout.on("data", (data) => {
        if (data.includes(`- Local:        ${BASE_URL}`)) {
          resolve();
        }
      });
    });

    console.log("Launching puppeteer process...");
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    await page.goto(`${BASE_URL}/cv`);

    await page.pdf({
      format: "A4",
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
      path,
      printBackground: true,
    });
    await browser.close();

    console.log(`Successfully saved PDF file to ${path}`);

    devPdfProcess.kill();
  } catch (error) {
    console.log(`Error while saving PDF file to ${path}: ${error}`);
  } finally {
    devPdfProcess.kill();
  }
})();
