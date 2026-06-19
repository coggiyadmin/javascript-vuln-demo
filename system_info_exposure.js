/**
 * FN probe — CWE-497 Exposure of Sensitive System Information.
 * A debug endpoint returns the full environment and platform details to the client.
 */
'use strict';
const express = require('express');
const os = require('os');
const app = express();

app.get('/debug', (req, res) => {
  // leaks env vars (secrets), versions, paths to an unauthorized actor → CWE-497
  res.json({ env: process.env, platform: os.platform(), cwd: process.cwd() });
});
