"use strict";
const express = require("express");
const sqlite3 = require("sqlite3");
const app = express();
app.get("/match", (req, res) => {
  const pattern = String(req.query.p || "").replace(/'/g, "''");
  new sqlite3.Database(":memory:").all("SELECT * FROM u WHERE n='" + pattern + "'", () => {});
  res.end(String(new RegExp(pattern).test(String(req.query.t || ""))));
});
module.exports = app;
