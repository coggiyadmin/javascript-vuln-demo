'use strict';
// CWE-426 — Untrusted Search Path. Bare binary name resolved via $PATH; an attacker-
// controlled PATH entry runs a malicious binary. (Engine gap.) FN probe.
const express = require('express');
const { execFile } = require('child_process');
const app = express();

app.get('/thumb', (req, res) => {
  const src = req.query.src || '';
  execFile('convert', [src, 'out.png'], () => res.end('ok')); // 'convert' via $PATH → CWE-426
});
module.exports = app;
