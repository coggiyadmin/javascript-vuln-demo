'use strict';
// SAFE mirror — weak_password_hash.js; slow, salted bcrypt KDF. Expect 0 findings.
const express = require('express');
const bcrypt = require('bcrypt');
const app = express();

app.post('/register', express.urlencoded({ extended: false }), (req, res) => {
  const digest = bcrypt.hashSync(req.body.password, 12);   // slow, salted KDF
  res.end(digest);
});
module.exports = app;
