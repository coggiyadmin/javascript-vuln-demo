"use strict";
const { exec } = require("child_process");
const express = require("express");
const app = express();
const companySanitize = (v) => String(v || "").replace(/;/g, "");
app.get("/x", (req, res) => {
  exec("grep " + companySanitize(req.query.q));
  res.end("ok");
});
module.exports = app;
