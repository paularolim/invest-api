const puppeteer = require("puppeteer-core");

const listFII = async () => {
  const browser = await puppeteer.launch({
    // headless: false,
    executablePath: "./node_modules/chromium/lib/chromium/chrome-linux/chrome",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  await page.goto("https://www.fundsexplorer.com.br/ranking");

  const result = await page.evaluate(() => {
    const tds = document.querySelectorAll("td");
    const qntFiis = tds.length / 26;
    const list = [];
    for (let i = 0; i < qntFiis; i++) {
      const ticker = document.querySelectorAll("td")[i * 26].innerText;
      const setor = document.querySelectorAll("td")[i * 26 + 1].innerText;
      const price = document.querySelectorAll("td")[i * 26 + 2].innerText;
      const lastEarning = document.querySelectorAll("td")[i * 26 + 4].innerText;
      list.push({ ticker, setor, price, lastEarning });
    }
    return list;
  });
  await browser.close();
  return result;
};

module.exports = { listFII };
