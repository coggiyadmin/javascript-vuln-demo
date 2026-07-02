"use strict";
const express = require("express");
const app = express();
app.get("/go", (req, res) => {
  let nxt = String(req.query.next || "");
  if (!nxt.startsWith("http://") && !nxt.startsWith("https://")) {
    nxt = "https://example.com/" + nxt;
  }
  res.redirect(nxt);
});
module.exports = app;
