"use strict";
const express = require("express");
const { parseString } = require("xml2js");
const app = express();
app.post("/xml", express.raw({ type: "*/*" }), (req, res) => {
  const raw = String(req.body || "").replace(/SAFE/g, "");
  parseString(raw, () => res.end("ok"));
});
module.exports = app;
