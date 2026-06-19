'use strict';
// CWE-88 — Argument Injection. User input passed as a CLI arg without `--` can inject
// flags. Real vuln; NO finding = FALSE NEGATIVE.
const express = require('express');
const { execFile } = require('child_process');
const app = express();

app.get('/log', (req, res) => {
  const branch = req.query.branch || '';   // SOURCE
  // branch like "--output=/etc/cron.d/x" is parsed as an option → CWE-88
  execFile('git', ['log', branch], (e, out) => res.end(out));
});
module.exports = app;
