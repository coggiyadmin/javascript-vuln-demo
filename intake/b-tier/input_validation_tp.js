'use strict';
/** B-tier PAT-INPUT-01 — unbounded user amount in transfer (CWE-20). */
const express = require('express');
const app = express();
app.get('/transfer', (req, res) => {
  const amount = parseInt(req.query.amount, 10); // SINK CWE-20
  const to = req.query.to;
  res.end(`xfer ${amount} to ${to}`);
});
module.exports = app;
