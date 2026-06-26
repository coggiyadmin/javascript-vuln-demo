'use strict';
/** Safe mirror — PAT-INPUT-01 */
const express = require('express');
const app = express();
const MAX = 1000;
app.get('/transfer', (req, res) => {
  const amount = parseInt(req.query.amount, 10);
  if (!Number.isFinite(amount) || amount <= 0 || amount > MAX) {
    return res.status(400).end('bad amount');
  }
  const to = req.query.to;
  res.end(`xfer ${amount} to ${to}`);
});
module.exports = app;
