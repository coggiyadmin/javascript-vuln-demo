// Combination #11 — FAN-OUT × XSS (CWE-79, JS).
'use strict';
const express = require('express');
const app = express();
app.get('/fanout', (req, res) => {
  const q = req.query.q || '';
  res.send('<p>' + q + '</p><h1>' + q + '</h1><span>' + q + '</span>'); // CWE-79
});
module.exports = app;
