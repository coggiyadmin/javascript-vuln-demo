'use strict';
// CWE-256 — Plaintext Storage of a Password. Stored as-is, no hashing. NO finding = FN.
const express = require('express');
const app = express();
const users = [];

app.post('/register', express.urlencoded({ extended: false }), (req, res) => {
  const user = req.body.user;
  const password = req.body.password;       // SOURCE
  users.push({ user, pw: password });        // plaintext password persisted → CWE-256
  res.end('ok');
});
module.exports = app;
