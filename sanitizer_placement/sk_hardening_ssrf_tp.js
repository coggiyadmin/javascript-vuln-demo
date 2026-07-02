"use strict";
const https = require("https");
const express = require("express");
const app = express();
app.get("/u", (req, res) => {
  const u = String(req.query.url || "");
  if (u.includes("127.0.0.1") || u.includes("169.254.169.254")) {
    res.status(403).end("blocked");
    return;
  }
  https.get(u);
  res.end("ok");
});
module.exports = app;
