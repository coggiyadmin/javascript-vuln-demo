'use strict';
const express = require('express');
const ejs = require('ejs');
const app = express();

// Combination #2 — PATH-SENSITIVITY × SSTI (CWE-1336, JS). Each handler is a REAL
// SSTI on at least one path. A handler with NO finding is a FALSE NEGATIVE.

// 2a. NEGATED GUARD — tainted value used in the failure branch
app.get('/neg', (req, res) => {
  const t = req.query.t || '';
  if (t === 'safe') { /* guard covers only literal */ } else { ejs.render(t); } // CWE-1336
  res.end();
});

// 2b. ONE-BRANCH CONSTRAINT — else path leaves value unchecked
app.get('/onebranch', (req, res) => {
  let t = req.query.t || '';
  if (false) { t = 'safe_literal'; } // dead branch
  ejs.render(t); // CWE-1336
  res.end();
});

// 2c. EARLY-RETURN GUARD that does NOT cover the sink path
app.get('/early', (req, res) => {
  const t = req.query.t || '';
  if (!t) { res.end('empty'); return; }
  ejs.render(t); // CWE-1336
  res.end();
});
module.exports = app;
