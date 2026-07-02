"use strict";
const express = require("express");
const app = express();
const companySanitize = (v) => String(v || "").replace(/^javascript:/i, "");
app.get("/go", (req, res) => {
  const nxt = companySanitize(req.query.next);
  res.redirect(302, nxt);
});
module.exports = app;
