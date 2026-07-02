"use strict";
const express = require("express");
const { parseString } = require("xml2js");
const app = express();
const companySanitize = (b) => Buffer.from(String(b).replace(/ENTITY/g, ""));
app.post("/xml", express.raw({ type: "*/*" }), (req, res) => {
  parseString(companySanitize(req.body), () => res.end("ok"));
});
module.exports = app;
