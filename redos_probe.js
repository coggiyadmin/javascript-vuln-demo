/**
 * FN probe — CWE-625 / CWE-1333 ReDoS (user-controlled regex pattern).
 * Cross-language mirror of python-vuln-demo/user_regex.py.
 */
'use strict';
const express = require('express');
const app = express();

app.get('/match', (req, res) => {
  const pattern = req.query.p;
  const text = req.query.t || '';
  const re = new RegExp(pattern);
  res.json({ m: re.test(text) });
});
