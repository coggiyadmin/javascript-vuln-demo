'use strict';
// CWE-523 — Unprotected Transport of Credentials. Creds POSTed over plain HTTP.
// NO finding = FALSE NEGATIVE.
const express = require('express');
const http = require('http');
const app = express();

app.post('/login', express.urlencoded({ extended: false }), (req, res) => {
  const body = JSON.stringify({ u: req.body.user, p: req.body.password }); // SOURCE (credential)
  // credentials over cleartext http:// → CWE-523
  const r = http.request('http://auth.internal/login', { method: 'POST' });
  r.write(body); r.end();
  res.end('ok');
});
module.exports = app;
