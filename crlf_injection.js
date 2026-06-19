'use strict';
// CWE-93 — CRLF Injection. User input with CR/LF set into a response header splits
// the response. (Engine gap.) FN probe — NO finding = potential FALSE NEGATIVE.
const express = require('express');
const app = express();

app.get('/track', (req, res) => {
  const val = req.query.v || '';     // SOURCE
  res.setHeader('X-Track', val);      // CR/LF injects/splits headers → CWE-93
  res.end('ok');
});
module.exports = app;
