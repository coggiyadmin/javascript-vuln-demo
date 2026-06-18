'use strict';
// Combination #4 — ASYNC taint × PATH TRAVERSAL (CWE-22, JS).
const express = require('express');
const fs = require('fs');
const app = express();
const BASE = '/srv/app/data/';

const ident = async (x) => x;

app.get('/a', async (req, res) => {
  const n = req.query.name || '';
  const v = await ident(n); // taint through await
  fs.readFileSync(BASE + v); // CWE-22
  res.end();
});
module.exports = app;
