"use strict";
const express = require("express");
const app = express();
const companySanitize = (v) => String(v || "").replace(/[<>]/g, "");
app.get("/x", (req, res) => {
  res.end("<p>" + companySanitize(req.query.q) + "</p>");
});
module.exports = app;
