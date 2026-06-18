'use strict';
// Combination #13 — ENCODED PAYLOAD × SSRF (CWE-918, JS). base64-decode preserves taint.
const express = require('express');
const http = require('http');
const app = express();

app.get('/x', (req, res) => {
  const u = Buffer.from(req.query.b64 || '', 'base64').toString(); // decode
  http.get(u); // CWE-918
  res.end();
});
module.exports = app;
