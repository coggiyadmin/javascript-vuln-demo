/**
 * SAFE mirror — executable_regex.js; a fixed server-side pattern redacts user text only.
 */
'use strict';
const express = require('express');
const app = express();
const DIGITS = /\d/g;

app.get('/redact', (req, res) => {
  const text = String(req.query.t || '');
  const count = (text.match(DIGITS) || []).length;  // static pattern; no user text reflected
  res.json({ redactedCount: count });
});
