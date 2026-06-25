/**
 * Safe mirror — execFile with argv array (mirrors safe_routes.js /ping pattern).
 */
'use strict';
const express = require('express');
const { execFile } = require('child_process');

const app = express();
app.use(express.json());

app.post('/symbolicate', (req, res) => {
  execFile('symbolicate-cli', ['--frame', String(req.body.frame || '')], (err, stdout) => {
    res.json({ output: stdout, error: err ? err.message : null });
  });
});

module.exports = app;
