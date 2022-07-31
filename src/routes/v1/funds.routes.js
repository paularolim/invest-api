const express = require("express");

const { detailFII } = require("../../scraping/detail-fii");
const { listFII } = require("../../scraping/list-fii");

const router = express.Router();

router.get("/funds", async (req, res) => {
  const result = await listFII();
  res.json(result);
});

router.get("/funds/:ticker", async (req, res) => {
  const result = await detailFII(req.params.ticker);
  res.json(result);
});

module.exports = { router };
