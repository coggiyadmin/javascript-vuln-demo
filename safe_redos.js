/**
 * SAFE mirror — redos_probe.js; fixed linear-time pattern, user text only.
 */
'use strict';
const express = require('express');
const app = express();

const ALLOWED = /^[a-z0-9_]{1,32}$/;

app.get('/match', (req, res) => {
  const text = String(req.query.t || '');
  res.json({ m: ALLOWED.test(text) });
});
