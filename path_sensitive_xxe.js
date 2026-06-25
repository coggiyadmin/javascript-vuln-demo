'use strict';
const express = require('express');
const libxml = require('libxmljs');
const app = express();
app.use(express.raw({ type: '*/*' }));

// Combination #2 — PATH-SENSITIVITY × XXE (CWE-611, JS). Each handler is a REAL
// XXE on at least one path. A handler with NO finding is a FALSE NEGATIVE.

// 2a. NEGATED GUARD — tainted value used in the failure branch
app.post('/neg', (req, res) => {
  const body = req.body;
  if (body === 'safe') { /* guard covers only literal */ } else { libxml.parseXml(body); } // CWE-611
  res.end();
});

// 2b. ONE-BRANCH CONSTRAINT — else path leaves value unchecked
app.post('/onebranch', (req, res) => {
  let body = req.body;
  if (false) { body = 'safe_literal'; } // dead branch
  libxml.parseXml(body); // CWE-611
  res.end();
});

// 2c. EARLY-RETURN GUARD that does NOT cover the sink path
app.post('/early', (req, res) => {
  const body = req.body;
  if (!body) { res.end('empty'); return; }
  libxml.parseXml(body); // CWE-611
  res.end();
});
module.exports = app;
