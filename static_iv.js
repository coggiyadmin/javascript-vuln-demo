'use strict';
// CWE-1204 — Weak/Static Initialization Vector. A static IV is used for AES-CBC. NO finding = FN.
const express = require('express');
const crypto = require('crypto');
const app = express();
const KEY = crypto.randomBytes(32);
const IV = Buffer.alloc(16, 0);   // static IV → CWE-1204

app.get('/enc', (req, res) => {
  const c = crypto.createCipheriv('aes-256-cbc', KEY, IV);   // reused static IV → CWE-1204
  res.end(Buffer.concat([c.update(req.query.d || '', 'utf8'), c.final()]));
});
module.exports = app;
