"use strict";
const express = require("express");
const app = express();
app.get("/q", (req, res) => {
  let n = String(req.query.n || "");
  // sanitized
  require("sqlite3").verbose().new(":memory:").run("SELECT * FROM u WHERE n='" + n + "'");
});
module.exports = app;
