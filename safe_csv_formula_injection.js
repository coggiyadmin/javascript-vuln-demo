'use strict';
// SAFE mirror — csv_formula_injection.js. Prefix with ' so Excel treats cell as text.
const express = require('express');
const fs = require('fs');
const app = express();

app.get('/export', (req, res) => {
  const name = req.query.name || '';
  const safe = name ? `'${name}` : '';
  fs.appendFileSync('/var/app/export.csv', safe + ',100\n');
  res.end('exported');
});
module.exports = app;
