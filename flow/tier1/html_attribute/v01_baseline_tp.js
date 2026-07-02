// TP (CWE-79 / cognium-dev#153) — user input in HTML attribute context without encoding.
const express = require("express");
const app = express();
app.get("/link", (req, res) => {
  const url = String(req.query.url || "");
  res.end(`<a href="${url}">click</a>`); // SINK (attribute context)
});
module.exports = app;
