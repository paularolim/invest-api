const express = require("express");

const { detailFII } = require("../../scraping/detail-fii");
const { listFII } = require("../../scraping/list-fii");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ success: true, version: "1.0.0" });
});

router.get("/funds", async (req, res) => {
  console.log("searching all funds...");
  const result = await listFII();
  res.json(result);
});

router.get("/funds/:ticker", async (req, res) => {
  console.log(`searching ${req.params.ticker} fund...`);
  const result = await detailFII(req.params.ticker);
  res.json(result);
});

module.exports = { router };
