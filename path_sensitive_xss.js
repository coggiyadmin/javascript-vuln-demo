// Combination #2 — PATH-SENSITIVITY × XSS (CWE-79, JS).
'use strict';
const express = require('express');
const app = express();
app.get('/neg', (req, res) => {
  const q = req.query.q || '';
  if (q.includes('<')) res.send('<p>' + q + '</p>'); // CWE-79
  else res.end();
});
app.get('/onebranch', (req, res) => {
  let q = req.query.q || '';
  if (req.query.strict) q = q.replace('<', '');
  res.send('<p>' + q + '</p>'); // CWE-79
});
app.get('/early', (req, res) => {
  const q = req.query.q || '';
  if (q === '') return res.end('empty');
  res.send('<p>' + q + '</p>'); // CWE-79
});
module.exports = app;
