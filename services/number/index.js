// services/number/index.js
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.post("/", (req, res) => {
  const { value } = req.body;
  if (typeof value === "number") {
    res.json({ type: "number", value });
  } else {
    res.status(400).send({ error: "Invalid number value" });
  }
});

app.listen(80, () => {
  console.log("Number service listening on port 80");
});