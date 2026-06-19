// Combination #11 — FAN-OUT × XPATH (CWE-643, JS).
const express = require('express');
const xpath = require('xpath');
const dom = require('xmldom').DOMParser;
const app = express();
const doc = new dom().parseFromString('<users/>');
app.get('/fanout', (req, res) => {
  const n = req.query.n || '';
  xpath.select('//user[name="' + n + '"]', doc);
  xpath.select('//account[name="' + n + '"]', doc);
  xpath.select('//*[@id="' + n + '"]', doc);
  res.end();
});
module.exports = app;
