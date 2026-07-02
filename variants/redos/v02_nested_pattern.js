const express = require("express");
const app = express();
app.get("/search", (req, res) => {
  const combined = `(${req.query.outer || ""})+${req.query.inner || ""}`;
  res.end(String(new RegExp(combined).test(String(req.query.t || ""))));
});
module.exports = app;
