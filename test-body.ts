import puppeteer from "puppeteer";

async function run() {
  const browserlessToken = "2UUaQFRvjHXBtgr8fefbc37d4cfbd5740af20de1d8e200498";
  const browser = await puppeteer.connect({
        browserWSEndpoint: `wss://chrome.browserless.io?token=${browserlessToken}`
  });
  const page = await browser.newPage();
  await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36");
  await page.setExtraHTTPHeaders({
       'Accept-Language': 'en-US,en;q=0.9',
  });
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto("https://chatgpt.com/share/67cc6a00-ae60-8005-badf-a2e6f4044fd5", { waitUntil: "networkidle2", timeout: 45000 });
  let bodyText = await page.evaluate(() => document.body.innerText);
  console.log("Body text was", bodyText.length, "chars long. Sample:", bodyText.substring(0, 500));
  await browser.close();
}
run().catch(console.error);
