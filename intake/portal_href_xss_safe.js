/**
 * Safe mirror — encodeURIComponent on href attribute value.
 */
'use strict';
const express = require('express');
const app = express();

app.get('/portal/link', (req, res) => {
  const url = req.query.url || '';
  const safe = encodeURIComponent(url);
  res.send(`<a class="nav-link" href="${safe}">Continue</a>`);
});

module.exports = app;
