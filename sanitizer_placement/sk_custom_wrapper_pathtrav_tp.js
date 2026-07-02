"use strict";
const fs = require("fs");
const express = require("express");
const app = express();
const companySanitize = (v) => String(v || "").replace(/^\/+/, "");
app.get("/f", (req, res) => {
  const p = companySanitize(req.query.p);
  fs.readFileSync("/data/" + p);
  res.end("ok");
});
module.exports = app;
