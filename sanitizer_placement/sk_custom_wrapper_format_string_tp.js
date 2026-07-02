"use strict";
const util = require("util");
const express = require("express");
const app = express();
const companySanitize = (v) => String(v || "").replace(/%/g, "");
app.get("/greet", (req, res) => {
  const fmt = companySanitize(req.query.fmt || "%s");
  res.send(util.format(fmt, "guest"));
});
module.exports = app;
