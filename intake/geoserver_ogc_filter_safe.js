/**
 * Safe mirror — constant expression only; no user-controlled codegen.
 */
'use strict';
const express = require('express');
const app = express();

app.post('/wfs', (req, res) => {
  const fn = new Function('return 1 + 1');
  res.json({ result: fn() });
});

module.exports = app;
