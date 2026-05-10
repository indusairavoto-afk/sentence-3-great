import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
console.log("running");
try {
  puppeteer.use(StealthPlugin());
  console.log("success");
} catch(e) {
  console.error("error", e);
}
