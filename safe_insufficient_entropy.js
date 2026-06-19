'use strict';
// SAFE mirror — insufficient_entropy.js; uses crypto.randomBytes (CSPRNG). Expect 0.
const express = require('express');
const crypto = require('crypto');
const app = express();

app.get('/reset-token', (req, res) => {
  res.end(crypto.randomBytes(16).toString('hex'));   // cryptographically secure
});
module.exports = app;
