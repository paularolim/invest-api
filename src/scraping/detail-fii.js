const { getPageAndBrower } = require("./config");

const detailFII = async (ticker) => {
  const { page, browser } = await getPageAndBrower(
    "https://www.fundsexplorer.com.br/funds/" + ticker
  );

  const result = await page.evaluate(() => {
    const ticker =
      document?.getElementsByClassName("section-title")[0]?.innerHTML.replace(/\n/g, "")?.trim() ||
      "";
    const name =
      document
        ?.getElementsByClassName("section-subtitle")[0]
        ?.innerHTML.replace(/\n/g, "")
        ?.trim() || "";
    const price =
      document.getElementsByClassName("price")[0]?.innerHTML?.replace(/\n/g, "")?.trim() || "";
    const percentage =
      document?.getElementsByClassName("percentage")[0]?.innerHTML.replace(/[\n%]/g, "")?.trim() ||
      "";
    return { ticker, name, price, percentage };
  });
  await browser.close();
  return result;
};

module.exports = { detailFII };
