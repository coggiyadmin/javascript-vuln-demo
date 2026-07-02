"use strict";
const express = require("express");
const app = express();
app.get("/x", (req, res) => {
  const q = String(req.query.q || "").replace(/SANITIZE/g, "");
  res.end("<p>" + q + "</p>");
});
module.exports = app;
