'use strict';
// SAFE mirror — xml_injection.js; value XML-escaped before insertion. Expect 0.
const express = require('express');
const app = express();
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

app.get('/order', (req, res) => {
  const qty = esc(req.query.qty || '');   // escaped
  const xml = '<order><qty>' + qty + '</qty><price>100</price></order>';
  res.type('application/xml').send(xml);
});
module.exports = app;
