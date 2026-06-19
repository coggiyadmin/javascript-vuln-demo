/**
 * SAFE mirror — executable_regex.js; a fixed server-side pattern redacts user text only.
 */
'use strict';
const express = require('express');
const app = express();
const DIGITS = /\d/g;

app.get('/redact', (req, res) => {
  const text = String(req.query.t || '');
  res.send(text.replace(DIGITS, '#'));     // static pattern, user supplies text only
});
