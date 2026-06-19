'use strict';
// CWE-331 — Insufficient Entropy. A security token from non-crypto Math.random(). NO finding = FN.
const express = require('express');
const app = express();

app.get('/reset-token', (req, res) => {
  res.end(Math.floor(Math.random() * 1e6).toString());   // Math.random() not CSPRNG → CWE-331/338
});
module.exports = app;
