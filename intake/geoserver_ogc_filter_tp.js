/**
 * TP — OGC/WFS filter expression evaluated as code (CWE-94 intake pattern).
 * CVE-2024-36401 class: server-side expression injection in geospatial filter handler.
 */
'use strict';
const express = require('express');
const app = express();
app.use(express.text());

app.post('/wfs', (req, res) => {
  const fn = new Function('return ' + req.body); // SINK CWE-94
  res.json({ result: fn() });
});

module.exports = app;
