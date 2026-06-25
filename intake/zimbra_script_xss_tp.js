/**
 * TP — stored message body echoed inside script block (CWE-79 intake pattern).
 * CVE-2025-27915 class: webmail script-context XSS.
 */
'use strict';
const express = require('express');
const app = express();

app.get('/zimbra/mail', (req, res) => {
  const fragment = req.query.fragment || '';
  res.send(`<script>var zmMsg = "${fragment}";</script>`); // SINK CWE-79
});

module.exports = app;
