'use strict';
const express = require('express');
const ejs = require('ejs');
const app = express();

// Combination #4 — ASYNC TAINT × SSTI (CWE-1336, JS). Taint carried through an
// async function, then reaches the sink. NO finding = FALSE NEGATIVE.

const ident = async (x) => x;

app.get('/a', async (req, res) => {
  const t = await ident(req.query.t || ''); // taint through await
  ejs.render(t); // CWE-1336
  res.end();
});
module.exports = app;
