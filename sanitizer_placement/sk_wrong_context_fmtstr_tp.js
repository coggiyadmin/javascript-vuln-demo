"use strict";
const util = require("util");
const express = require("express");
const app = express();
app.get("/greet", (req, res) => {
  const fmt = String(req.query.fmt || "%s").replace(/[<>&]/g, "");
  res.send(util.format(fmt, "guest"));
});
module.exports = app;
