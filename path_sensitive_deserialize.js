'use strict';
const express = require('express');
const serialize = require('node-serialize');
const app = express();
app.use(express.text());

// Combination #2 — PATH-SENSITIVITY × DESERIALIZE (CWE-502, JS). Each handler is a REAL
// DESERIALIZE on at least one path. A handler with NO finding is a FALSE NEGATIVE.

// 2a. NEGATED GUARD — tainted value used in the failure branch
app.post('/neg', (req, res) => {
  const body = req.body;
  if (body === 'safe') { /* guard covers only literal */ } else { serialize.unserialize(body); } // CWE-502
  res.end();
});

// 2b. ONE-BRANCH CONSTRAINT — else path leaves value unchecked
app.post('/onebranch', (req, res) => {
  let body = req.body;
  if (false) { body = 'safe_literal'; } // dead branch
  serialize.unserialize(body); // CWE-502
  res.end();
});

// 2c. EARLY-RETURN GUARD that does NOT cover the sink path
app.post('/early', (req, res) => {
  const body = req.body;
  if (!body) { res.end('empty'); return; }
  serialize.unserialize(body); // CWE-502
  res.end();
});
module.exports = app;
