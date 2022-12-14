const puppeteer = require("puppeteer");

const getPageAndBrower = async (url) => {
  const browser = await puppeteer.launch({
    headless: true,
    // executablePath: "./node_modules/chromium/lib/chromium/chrome-linux/chrome",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  await page.goto(url);

  return { page, browser };
};

module.exports = { getPageAndBrower };
