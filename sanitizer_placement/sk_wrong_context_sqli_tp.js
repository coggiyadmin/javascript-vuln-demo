"use strict";
const express = require("express");
const app = express();
app.get("/q", (req, res) => {
  const n = String(req.query.n || "").replace(/[<>&]/g, "");
  require("sqlite3").verbose().new(":memory:").run("SELECT * FROM u WHERE n='" + n + "'");
});
module.exports = app;
