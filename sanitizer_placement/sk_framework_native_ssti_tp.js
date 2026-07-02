"use strict";
const express = require("express");
const Handlebars = require("handlebars");
const sqlite3 = require("sqlite3");
const app = express();
app.get("/q", (req, res) => {
  const tpl = Handlebars.compile("{{u}}");
  const safe = tpl({ u: String(req.query.uid || "") });
  sqlite3.verbose().new(":memory:").run("SELECT * FROM u WHERE n='" + safe + "'");
  res.end("ok");
});
module.exports = app;
