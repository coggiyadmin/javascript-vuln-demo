"use strict";
const fs = require("fs");
const express = require("express");
const path = require("path");
const app = express();
app.get("/f", (req, res) => {
  const p = path.basename(String(req.query.p || "")); // sanitized into p ...
  fs.readFileSync("/data/" + req.query.p); // ... but the sink reads the raw value
  res.end("ok");
});
module.exports = app;
