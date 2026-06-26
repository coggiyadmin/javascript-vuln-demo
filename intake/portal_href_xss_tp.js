/**
 * TP — user URL embedded in href without encoding (CWE-79 intake pattern).
 * CVE-2024-37383 class: reflected XSS via javascript: / event handler in link href.
 */
'use strict';
const express = require('express');
const app = express();

app.get('/portal/link', (req, res) => {
  const url = req.query.url || '';
  res.send(`<a class="nav-link" href="${url}">Continue</a>`); // SINK CWE-79
});

module.exports = app;
