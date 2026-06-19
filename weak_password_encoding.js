'use strict';
// CWE-261 — Weak Encoding for Password. base64 (encoding, not encryption) used as if it
// protected the password. (Engine gap.) FN probe.
const express = require('express');
const fs = require('fs');
const app = express();

app.post('/store', express.urlencoded({ extended: false }), (req, res) => {
  const encoded = Buffer.from(req.body.password).toString('base64');   // encoding ≠ protection → CWE-261
  fs.writeFileSync('/var/app/pw.txt', encoded);
  res.end('ok');
});
module.exports = app;
