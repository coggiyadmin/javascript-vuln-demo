/**
 * SAFE mirror — divide_by_zero.js; the divisor is checked for zero.
 */
'use strict';
const express = require('express');
const app = express();

app.get('/average', (req, res) => {
  const total = 1000;
  const n = parseInt(req.query.n || '0', 10);
  if (n === 0) {                          // guarded
    return res.status(400).send('n must be non-zero');
  }
  res.send(String(total / n));
});
