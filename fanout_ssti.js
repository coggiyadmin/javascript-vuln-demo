// Combination #11 — FAN-OUT × SSTI (CWE-1336, JS).
const express = require('express');
const ejs = require('ejs');
const app = express();
app.get('/fanout', (req, res) => {
  const n = req.query.n || '';
  ejs.render('<p>' + n + '</p>');
  ejs.render('<h1>' + n + '</h1>');
  ejs.render('{% set x = "' + n + '" %}{{ x }}');
  res.end();
});
module.exports = app;
