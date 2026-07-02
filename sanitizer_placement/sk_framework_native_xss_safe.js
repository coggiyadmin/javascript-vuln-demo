"use strict";
const express = require("express");
const app = express();
app.get("/x", (req, res) => {
  const q = req.query.q || "";
  res.end(`<p>${String(q).replace(/&/g, "&amp;").replace(/</g, "&lt;")}</p>`);
});
module.exports = app;
