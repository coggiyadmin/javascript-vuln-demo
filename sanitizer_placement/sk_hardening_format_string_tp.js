"use strict";
const util = require("util");
const express = require("express");
const app = express();
app.get("/greet", (req, res) => {
  let fmt = String(req.query.fmt || "%s");
  if (fmt.length > 32) fmt = "%s";
  res.send(util.format(fmt, "guest"));
});
module.exports = app;
