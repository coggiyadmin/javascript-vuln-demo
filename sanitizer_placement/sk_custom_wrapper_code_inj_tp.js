"use strict";
const vm = require("vm");
const express = require("express");
const app = express();
const companySanitize = (v) => String(v || "").replace(/;/g, "");
app.get("/run", (req, res) => {
  const code = companySanitize(req.query.code);
  vm.runInNewContext(code);
  res.end("ok");
});
module.exports = app;
