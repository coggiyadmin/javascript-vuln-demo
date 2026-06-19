'use strict';
// CWE-470 — Unsafe Reflection. User input selects the module to require/invoke. NO finding = FN.
const express = require('express');
const app = express();

app.get('/make', (req, res) => {
  const mod = req.query.mod || '';   // SOURCE
  const handler = require(mod);        // dynamic require of an arbitrary module → CWE-470
  res.json(handler());
});
module.exports = app;
