'use strict';
// SAFE mirror — unsafe_reflection.js; resolve against a fixed allowlist registry, never
// require()-ing arbitrary input. Expect 0 security findings.
const express = require('express');
const app = express();
const REGISTRY = { csv: () => 'csv-export', json: () => 'json-export' };

app.get('/make', (req, res) => {
  const handler = REGISTRY[req.query.mod];   // allowlist lookup — no reflection
  if (!handler) return res.status(400).end('unknown');
  res.json(handler());
});
module.exports = app;
