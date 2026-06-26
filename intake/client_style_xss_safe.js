/**
 * Safe mirror — theme token maps to constant CSS class literal.
 */
'use strict';
const express = require('express');
const app = express();

app.get('/prefs/theme', (req, res) => {
  let cls = 'theme-light';
  if (req.query.theme === 'dark') cls = 'theme-dark';
  res.send(`<div class="${cls}">Preferences</div>`);
});

module.exports = app;
