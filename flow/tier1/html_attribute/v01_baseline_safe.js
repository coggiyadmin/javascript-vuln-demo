// Safe mirror (cognium-dev#153) — attribute-encoded href.
const express = require("express");
const app = express();
app.get("/link", (req, res) => {
  const url = String(req.query.url || "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;");
  res.end(`<a href="${url}">click</a>`);
});
module.exports = app;
