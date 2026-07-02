"use strict";
const https = require("https");
const express = require("express");
const app = express();
app.get("/u", (req, res) => {
  const u = String(req.query.url || "").replace(/[<>&]/g, "");
  https.get("https://api.example.com/" + u);
  res.end("ok");
});
module.exports = app;
