/**
 * FN probe — CWE-624 Executable Regular Expression Error. A user-supplied pattern is compiled
 * and used to drive a replacement, letting the attacker control match logic. NO finding = FN.
 */
'use strict';
const express = require('express');
const app = express();

app.get('/redact', (req, res) => {
  const pattern = req.query.p;             // SOURCE — attacker-controlled regex
  const text = req.query.t || '';
  const re = new RegExp(pattern, 'g');     // executable user regex → CWE-624 (cf 625)
  res.send(text.replace(re, '#'));
});
