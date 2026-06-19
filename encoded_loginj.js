// Combination #13 — ENCODED × LOG INJ (CWE-117, JS).
const express = require('express');
const app = express();
app.get('/b64', (req, res) => {
  const u = Buffer.from(req.query.d || '', 'base64').toString();
  console.log('a ' + u);
  res.end();
});
app.get('/url', (req, res) => {
  const u = decodeURIComponent(req.query.d || '');
  console.log('a ' + u);
  res.end();
});
module.exports = app;
