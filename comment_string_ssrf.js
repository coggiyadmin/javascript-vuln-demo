'use strict';
// Combination #9 — COMMENT / STRING-LITERAL × SSRF (CWE-918, JS). The sink appears only
// in a comment and a string literal — it must NOT fire (0 findings = correct).
const express = require('express');
const http = require('http');
const app = express();

app.get('/x', (req, res) => {
  const url = req.query.url || '';
  // http.get(url)   <-- commented-out sink, must not fire
  const example = "http.get(url)"; // string literal, must not fire
  res.end(String(example.length + url.length));
});
module.exports = app;
