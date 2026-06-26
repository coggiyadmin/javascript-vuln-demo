/**
 * TP — user color in style attribute (CWE-79 intake pattern).
 * CVE-2020-35730 class: client-side style injection XSS.
 */
'use strict';
const express = require('express');
const app = express();

app.get('/prefs/theme', (req, res) => {
  const color = req.query.color || '';
  res.send(`<div style="color:${color}">Preferences</div>`); // SINK CWE-79
});

module.exports = app;
