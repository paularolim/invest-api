const express = require("express");
const { router } = require("./routes/v1/funds.routes");

const app = express();
const port = process.env.PORT || 3000;

app.use("/v1", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
