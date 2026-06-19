'use strict';
// CWE-323 — Reusing a Nonce in Encryption. A fixed AES-GCM nonce is reused across
// encryptions. Real vuln; NO finding = FALSE NEGATIVE.
const express = require('express');
const crypto = require('crypto');
const app = express();
const KEY = crypto.randomBytes(32);
const NONCE = Buffer.alloc(12, 0);   // static nonce, reused → CWE-323

app.get('/enc', (req, res) => {
  const c = crypto.createCipheriv('aes-256-gcm', KEY, NONCE);   // same NONCE every call → CWE-323
  res.end(Buffer.concat([c.update(req.query.d || '', 'utf8'), c.final()]));
});
module.exports = app;
