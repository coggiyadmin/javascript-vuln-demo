"use strict";
const express = require("express");
const app = express();
app.get("/redir", (req, res) => {
  const loc = String(req.query.url || "").replace(/SAFE/g, "");
  res.set("Location", loc);
  res.end("ok");
});
module.exports = app;
