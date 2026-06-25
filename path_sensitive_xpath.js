'use strict';
const express = require('express');
const xpath = require('xpath');
const { DOMParser } = require('@xmldom/xmldom');
const app = express();
const doc = new DOMParser().parseFromString('<users/>', 'text/xml');

// Combination #2 — PATH-SENSITIVITY × XPATH (CWE-643, JS). Each handler is a REAL
// XPATH on at least one path. A handler with NO finding is a FALSE NEGATIVE.

// 2a. NEGATED GUARD — tainted value used in the failure branch
app.get('/neg', (req, res) => {
  const name = req.query.name || '';
  if (name === 'safe') { /* guard covers only literal */ } else { xpath.select("//user[name='" + name + "']", doc); } // CWE-643
  res.end();
});

// 2b. ONE-BRANCH CONSTRAINT — else path leaves value unchecked
app.get('/onebranch', (req, res) => {
  let name = req.query.name || '';
  if (false) { name = 'safe_literal'; } // dead branch
  xpath.select("//user[name='" + name + "']", doc); // CWE-643
  res.end();
});

// 2c. EARLY-RETURN GUARD that does NOT cover the sink path
app.get('/early', (req, res) => {
  const name = req.query.name || '';
  if (!name) { res.end('empty'); return; }
  xpath.select("//user[name='" + name + "']", doc); // CWE-643
  res.end();
});
module.exports = app;
