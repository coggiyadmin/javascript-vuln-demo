'use strict';
// CWE-41 — Path Equivalence. Extension check bypassed by equivalent forms. NO finding = FN.
const express = require('express');
const fs = require('fs');
const app = express();
const BASE = '/srv/app/data/';

app.get('/get', (req, res) => {
  const name = req.query.name || '';
  if (name.endsWith('.txt')) {                  // naive allowlist by extension
    return res.end(fs.readFileSync(BASE + name)); // "secret.txt." / "..%2f" bypass → CWE-41
  }
  res.status(403).end('blocked');
});
module.exports = app;
