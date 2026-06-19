/**
 * SAFE mirror — dangerous_function.js; a constrained numeric parser replaces the VM call.
 */
'use strict';
const express = require('express');
const app = express();

app.get('/calc', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    return res.status(400).send('bad input');
  }
  res.send(String(a + b));                 // no dynamic evaluation
});
