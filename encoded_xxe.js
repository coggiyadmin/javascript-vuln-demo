// Combination #13 — ENCODED × XXE (CWE-611, JS).
const express = require('express');
const libxml = require('libxmljs2');
const app = express();
app.get('/b64', (req, res) => {
  const x = Buffer.from(req.query.d || '', 'base64').toString();
  libxml.parseXml(x);
  res.end();
});
app.get('/url', (req, res) => {
  const x = decodeURIComponent(req.query.d || '');
  libxml.parseXml(x);
  res.end();
});
module.exports = app;
