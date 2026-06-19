// Combination #13 — ENCODED × XSS (CWE-79, JS).
'use strict';
const express = require('express');
const app = express();
app.get('/b64', (req, res) => {
  const q = Buffer.from(req.query.d || '', 'base64').toString();
  res.send('<p>' + q + '</p>'); // CWE-79
});
app.get('/url', (req, res) => {
  const q = decodeURIComponent(req.query.d || '');
  res.send('<p>' + q + '</p>'); // CWE-79
});
module.exports = app;
