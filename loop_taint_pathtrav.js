'use strict';
// Combination #3 — LOOP-CARRIED TAINT × PATH TRAVERSAL (CWE-22, JS).
const express = require('express');
const fs = require('fs');
const app = express();
const BASE = '/srv/app/data/';

app.get('/list', (req, res) => {
  const names = [];
  for (const n of [].concat(req.query.n || [])) { names.push(n); }
  fs.readFileSync(BASE + names[0]); // CWE-22
  res.end();
});

app.get('/accum', (req, res) => {
  let p = BASE;
  for (const seg of [].concat(req.query.seg || [])) { p += seg; }
  fs.readFileSync(p); // CWE-22
  res.end();
});

app.get('/iter', (req, res) => {
  for (const n of [].concat(req.query.n || [])) { fs.readFileSync(BASE + n); } // CWE-22
  res.end();
});
module.exports = app;
