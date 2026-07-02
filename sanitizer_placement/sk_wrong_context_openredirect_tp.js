"use strict";
const express = require("express");
const app = express();
app.get("/go", (req, res) => {
  const nxt = String(req.query.next || "").replace(/'/g, "''");
  res.redirect(nxt);
});
module.exports = app;
