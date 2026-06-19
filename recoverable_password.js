'use strict';
// CWE-257 — Storing Passwords in a Recoverable Format. AES-encrypted (reversible) with a
// key on hand. (Engine gap.) FN probe.
const express = require('express');
const crypto = require('crypto');
const fs = require('fs');
const app = express();
const KEY = crypto.randomBytes(32);
const IV = Buffer.alloc(16, 0);

app.post('/store', express.urlencoded({ extended: false }), (req, res) => {
  const cipher = crypto.createCipheriv('aes-256-cbc', KEY, IV);
  const enc = Buffer.concat([cipher.update(req.body.password), cipher.final()]); // reversible → CWE-257
  fs.writeFileSync('/var/app/pw.bin', enc);
  res.end('ok');
});
module.exports = app;
