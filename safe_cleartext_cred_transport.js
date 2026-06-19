'use strict';
// SAFE mirror — cleartext_cred_transport.js; credentials sent over HTTPS. Expect 0.
const express = require('express');
const https = require('https');
const app = express();

app.post('/login', express.urlencoded({ extended: false }), (req, res) => {
  const body = JSON.stringify({ u: req.body.user, p: req.body.password });
  const r = https.request('https://auth.internal/login', { method: 'POST' });
  r.write(body); r.end();
  res.end('ok');
});
module.exports = app;
