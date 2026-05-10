const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());

(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox", "--disable-setuid-sandbox"] });
  
  try {
    const page2 = await browser.newPage();
    await page2.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36");
    await page2.goto("https://chatgpt.com/share/6a008356-6ea8-83e9-85a5-57ccc01d0a51", { waitUntil: "networkidle2", timeout: 45000 });
    console.log("Screenshot Link Title:", await page2.title());
    const html = await page2.content();
    require('fs').writeFileSync('chatgpt-test2.html', html);
  } catch (e) {
    console.error("Error:", e);
  } finally {
    await browser.close();
  }
})();
