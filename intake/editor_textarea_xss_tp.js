/**
 * TP — user content reflected inside textarea value (CWE-79 intake pattern).
 * CVE-2024-11182 class: editor textarea attribute-context XSS.
 */
'use strict';
const express = require('express');
const app = express();

app.get('/editor', (req, res) => {
  const draft = req.query.draft || '';
  res.send(`<textarea name="body">${draft}</textarea>`); // SINK CWE-79
});

module.exports = app;
