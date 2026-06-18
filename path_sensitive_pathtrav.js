'use strict';
// Combination #2 — PATH-SENSITIVITY × PATH TRAVERSAL (CWE-22, JS). Each handler is a
// REAL path traversal on at least one path. NO finding = FALSE NEGATIVE.
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const BASE = '/srv/app/data/';

app.get('/neg', (req, res) => {
  const name = req.query.name || '';
  if (name.includes('..') || name.includes('/')) { fs.readFileSync(BASE + name); } // read anyway -> CWE-22
  res.end();
});

app.get('/onebranch', (req, res) => {
  let name = req.query.name || '';
  if (req.query.strict) { name = path.basename(name); }
  fs.readFileSync(BASE + name); // else path tainted -> CWE-22
  res.end();
});

app.get('/early', (req, res) => {
  const name = req.query.name || '';
  if (name === '') { res.end('empty'); return; }
  fs.readFileSync(BASE + name); // CWE-22
  res.end();
});
module.exports = app;
