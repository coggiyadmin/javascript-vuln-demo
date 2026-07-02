"use strict";
const express = require("express");
const app = express();
app.get("/match", (req, res) => {
  const pattern = String(req.query.p || "");
  if (pattern.length > 64) { res.status(400).end("bad"); return; }
  res.end(String(new RegExp(pattern).test(String(req.query.t || ""))));
});
module.exports = app;
