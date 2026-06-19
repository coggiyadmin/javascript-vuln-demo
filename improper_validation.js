/**
 * FN probe — CWE-1173 Improper Use of Validation Framework. A validator is invoked but its
 * result is discarded, so invalid input proceeds. Real vuln; NO finding = FN.
 */
'use strict';
const express = require('express');
const app = express();

function isValidEmail(s) { return /^[^@]+@[^@]+\.[^@]+$/.test(s); }

app.post('/subscribe', (req, res) => {
  const email = req.body.email;
  isValidEmail(email);                     // validation result IGNORED → CWE-1173
  saveSubscriber(email);                   // proceeds with unvalidated input
  res.send('ok');
});

function saveSubscriber(_e) {}
