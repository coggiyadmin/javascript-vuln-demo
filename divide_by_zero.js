/**
 * FN probe — CWE-369 Divide By Zero. A user-supplied divisor can be 0.
 */
'use strict';
const express = require('express');
const app = express();

app.get('/average', (req, res) => {
  const total = 1000;
  const n = parseInt(req.query.n || '0', 10);  // SOURCE — divisor, can be 0
  res.send(String(total / n));                  // divide-by-zero → CWE-369
});
