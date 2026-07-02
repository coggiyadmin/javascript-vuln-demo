"use strict";
const fs = require("fs");
const express = require("express");
const path = require("path");
const app = express();
app.get("/f", (req, res) => {
  const p = path.basename(String(req.query.p || ""));
  fs.readFileSync("/data/" + p);
  res.end("ok");
});
module.exports = app;
