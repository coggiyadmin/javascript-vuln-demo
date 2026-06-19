// Combination #13 — ENCODED × XPATH (CWE-643, JS).
const express = require('express');
const xpath = require('xpath');
const dom = require('xmldom').DOMParser;
const app = express();
const doc = new dom().parseFromString('<users/>');
app.get('/b64', (req, res) => {
  const n = Buffer.from(req.query.d || '', 'base64').toString();
  xpath.select('//user[name="' + n + '"]', doc);
  res.end();
});
app.get('/url', (req, res) => {
  const n = decodeURIComponent(req.query.d || '');
  xpath.select('//user[name="' + n + '"]', doc);
  res.end();
});
module.exports = app;
