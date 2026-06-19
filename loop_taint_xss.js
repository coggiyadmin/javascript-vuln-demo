// Combination #3 — LOOP × XSS (CWE-79, JS).
'use strict';
const express = require('express');
const app = express();
app.get('/loop', (req, res) => {
  let h = '';
  for (const it of (req.query.q || '').split(',')) h += '<span>' + it + '</span>'; // CWE-79
  res.send(h);
});
module.exports = app;
