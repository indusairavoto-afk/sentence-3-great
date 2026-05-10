const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());

(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox", "--disable-setuid-sandbox"] });
  const page = await browser.newPage();
  console.log("Navigating...");
  try {
    await page.goto("https://chatgpt.com/share/61066cc0-4e35-430c-ab18-809b45fd6df8", { waitUntil: "domcontentloaded", timeout: 45000 });
    console.log("Navigation successful");
    await new Promise(r => setTimeout(r, 2000));
    console.log("Title: " + await page.title());
  } catch (e) {
    console.error("Error:", e);
  } finally {
    await browser.close();
  }
})();
