'use strict';
// SAFE mirror — static_iv.js; a fresh random IV is generated per encryption. Expect 0.
const express = require('express');
const crypto = require('crypto');
const app = express();
const KEY = crypto.randomBytes(32);

app.get('/enc', (req, res) => {
  const iv = crypto.randomBytes(16);   // unique IV per encryption
  const c = crypto.createCipheriv('aes-256-cbc', KEY, iv);
  res.end(Buffer.concat([iv, c.update(req.query.d || '', 'utf8'), c.final()]));
});
module.exports = app;
