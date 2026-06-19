// Combination #13 — ENCODED × SSTI (CWE-1336, JS).
const express = require('express');
const ejs = require('ejs');
const app = express();
app.get('/b64', (req, res) => {
  const n = Buffer.from(req.query.d || '', 'base64').toString();
  ejs.render('<p>' + n + '</p>');
  res.end();
});
app.get('/url', (req, res) => {
  const n = decodeURIComponent(req.query.d || '');
  ejs.render('<p>' + n + '</p>');
  res.end();
});
module.exports = app;
