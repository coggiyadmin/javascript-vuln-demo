'use strict';
// CWE-91 — XML Injection. Unescaped input concatenated into an XML document injects
// structure. Real vuln; NO finding = FALSE NEGATIVE.
const express = require('express');
const app = express();

app.get('/order', (req, res) => {
  const qty = req.query.qty || '';   // SOURCE
  // qty = "1</qty><price>0</price><qty>1" injects elements → CWE-91
  const xml = '<order><qty>' + qty + '</qty><price>100</price></order>';
  res.type('application/xml').send(xml);
});
module.exports = app;
