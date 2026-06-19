// Combination #11 — FAN-OUT × XXE (CWE-611, JS).
const express = require('express');
const libxml = require('libxmljs2');
const app = express();
app.get('/fanout', (req, res) => {
  const x = req.query.xml || '';
  libxml.parseXml(x);
  libxml.parseXml('<r>' + x + '</r>');
  libxml.parseXml(x);
  res.end();
});
module.exports = app;
