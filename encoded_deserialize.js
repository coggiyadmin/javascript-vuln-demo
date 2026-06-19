// Combination #13 — ENCODED × DESER (CWE-502, JS).
const express = require('express');
const serialize = require('node-serialize');
const app = express();
app.get('/b64', (req, res) => {
  const s = Buffer.from(req.query.d || '', 'base64').toString();
  serialize.unserialize(s);
  res.end();
});
app.get('/url', (req, res) => {
  const s = decodeURIComponent(req.query.d || '');
  serialize.unserialize(s);
  res.end();
});
module.exports = app;
