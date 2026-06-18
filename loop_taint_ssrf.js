'use strict';
// Combination #3 — LOOP-CARRIED TAINT × SSRF (CWE-918, JS). Taint flows through a
// loop into the fetch sink. A handler with NO finding is a FALSE NEGATIVE.
const express = require('express');
const http = require('http');
const app = express();

// 3a. LIST BUILT IN LOOP
app.get('/list', (req, res) => {
  const urls = [];
  for (const u of [].concat(req.query.u || [])) { urls.push(u); }
  http.get(urls[0]); // taint via list element -> CWE-918
  res.end();
});

// 3b. STRING ACCUMULATOR
app.get('/accum', (req, res) => {
  let acc = 'https://';
  for (const p of [].concat(req.query.p || [])) { acc += p; }
  http.get(acc); // accumulated tainted URL -> CWE-918
  res.end();
});

// 3c. ITERATE-AND-SINK
app.get('/iter', (req, res) => {
  for (const u of [].concat(req.query.u || [])) { http.get(u); } // CWE-918 per iteration
  res.end();
});
module.exports = app;
