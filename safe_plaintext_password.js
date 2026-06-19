'use strict';
// SAFE mirror — plaintext_password.js; bcrypt hash stored, never cleartext. Expect 0.
const express = require('express');
const bcrypt = require('bcrypt');
const app = express();
const users = [];

app.post('/register', express.urlencoded({ extended: false }), (req, res) => {
  const user = req.body.user;
  const hash = bcrypt.hashSync(req.body.password, 12);   // one-way hash
  users.push({ user, pw: hash });
  res.end('ok');
});
module.exports = app;
