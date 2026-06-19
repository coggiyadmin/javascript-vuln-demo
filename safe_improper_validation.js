/**
 * SAFE mirror — improper_validation.js; the validator result is enforced before use.
 */
'use strict';
const express = require('express');
const app = express();

function isValidEmail(s) { return /^[^@]+@[^@]+\.[^@]+$/.test(s); }

app.post('/subscribe', (req, res) => {
  const email = req.body.email;
  if (!isValidEmail(email)) {              // result enforced
    return res.status(400).send('invalid email');
  }
  saveSubscriber(email);
  res.send('ok');
});

function saveSubscriber(_e) {}
