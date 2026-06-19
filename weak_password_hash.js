'use strict';
// CWE-916 — Weak Password Hash. Fast, unsalted SHA-256 for passwords. NO finding = FN.
const express = require('express');
const crypto = require('crypto');
const app = express();

app.post('/register', express.urlencoded({ extended: false }), (req, res) => {
  const password = req.body.password;   // SOURCE
  const digest = crypto.createHash('sha256').update(password).digest('hex'); // fast hash → CWE-916
  res.end(digest);
});
module.exports = app;
