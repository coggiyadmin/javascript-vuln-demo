'use strict';
// CWE-73 — External Control of File Name or Path. User fully controls the path.
// Real vuln; NO finding = FALSE NEGATIVE.
const express = require('express');
const fs = require('fs');
const app = express();

app.get('/read', (req, res) => {
  const path = req.query.path || '';   // SOURCE — full path
  res.end(fs.readFileSync(path));       // arbitrary file read → CWE-73
});
module.exports = app;
