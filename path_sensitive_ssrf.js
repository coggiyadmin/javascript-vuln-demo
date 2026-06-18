'use strict';
// Combination #2 — PATH-SENSITIVITY × SSRF (CWE-918, JS). Each handler is a REAL SSRF
// on at least one path. A handler with NO finding is a FALSE NEGATIVE.
const express = require('express');
const http = require('http');
const app = express();

// 2a. NEGATED GUARD — tainted URL fetched in the FAILURE branch
app.get('/neg', (req, res) => {
  const url = req.query.url || '';
  if (!url.startsWith('https://api.internal/')) { http.get(url); } // fetched anyway -> CWE-918
  res.end();
});

// 2b. ONE-BRANCH ALLOWLIST — else path leaves the URL unchecked
app.get('/onebranch', (req, res) => {
  let url = req.query.url || '';
  if (req.query.strict) { url = 'https://api.internal/' + url.split('/').pop(); }
  http.get(url); // else path fetches tainted URL -> CWE-918
  res.end();
});

// 2c. EARLY-RETURN GUARD that does NOT cover the sink path
app.get('/early', (req, res) => {
  const url = req.query.url || '';
  if (url === '') { res.end('empty'); return; }
  http.get(url); // any non-empty tainted URL -> CWE-918
  res.end();
});
module.exports = app;
