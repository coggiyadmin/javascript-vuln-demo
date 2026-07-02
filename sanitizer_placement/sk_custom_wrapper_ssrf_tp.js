"use strict";
const http = require("http");
const express = require("express");
const app = express();
const companySanitize = (v) => String(v || "").replace(/^https?:\/\//, "");
app.get("/fetch", (req, res) => {
  const url = companySanitize(req.query.url);
  http.get("http://" + url, () => res.end("ok"));
});
module.exports = app;
