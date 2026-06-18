'use strict';
// Combination #4 — ASYNC taint × SSRF (CWE-918, JS). await a coroutine carrying the
// taint, then fetch. NO finding = FALSE NEGATIVE.
const express = require('express');
const http = require('http');
const app = express();

const ident = async (x) => x;

app.get('/a', async (req, res) => {
  const u = req.query.url || '';
  const v = await ident(u); // taint through await
  http.get(v);              // CWE-918
  res.end();
});
module.exports = app;
