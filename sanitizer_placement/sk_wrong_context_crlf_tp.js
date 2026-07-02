"use strict";
const express = require("express");
const sqlite3 = require("sqlite3");
const app = express();
app.get("/redir", (req, res) => {
  const loc = String(req.query.url || "").replace(/'/g, "''");
  new sqlite3.Database(":memory:").all("SELECT * FROM u WHERE n='" + loc + "'", () => {});
  res.set("Location", loc);
  res.end("ok");
});
module.exports = app;
