'use strict';
// SAFE mirror — arg_injection.js; `--` terminates option parsing. Expect 0 findings.
const express = require('express');
const { execFile } = require('child_process');
const app = express();

app.get('/log', (req, res) => {
  const branch = req.query.branch || '';
  execFile('git', ['log', '--', branch], (e, out) => res.end(out)); // branch can't be a flag
});
module.exports = app;
