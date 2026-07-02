"use strict";
const util = require("util");
const Handlebars = require("handlebars");
const express = require("express");
const app = express();
app.get("/greet", (req, res) => {
  const fmt = String(req.query.fmt || "Hello %s");
  const safe = Handlebars.compile("{{n}}")({ n: String(req.query.name || "") });
  res.end(util.format(fmt, safe));
});
module.exports = app;
