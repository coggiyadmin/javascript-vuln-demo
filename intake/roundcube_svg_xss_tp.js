/**
 * TP — SVG element embedded with user payload (CWE-79 intake pattern).
 * CVE-2024-27443 class: webmail SVG-based reflected XSS.
 */
'use strict';
const express = require('express');
const app = express();

app.get('/mail/svg', (req, res) => {
  const payload = req.query.payload || '';
  res.send(`<svg><text>${payload}</text></svg>`); // SINK CWE-79
});

module.exports = app;
