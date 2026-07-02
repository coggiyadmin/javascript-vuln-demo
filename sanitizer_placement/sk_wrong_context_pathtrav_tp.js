"use strict";
const fs = require("fs");
const express = require("express");
const app = express();
app.get("/f", (req, res) => {
  const p = String(req.query.p || "").replace(/[<>&]/g, "");
  fs.readFileSync("/data/" + p);
  res.end("ok");
});
module.exports = app;
