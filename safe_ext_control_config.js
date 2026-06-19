/**
 * SAFE mirror — ext_control_config.js; only an allow-listed setting may be changed.
 */
'use strict';
const express = require('express');
const app = express();
const ALLOWED = new Set(['locale', 'theme']);

app.get('/config', (req, res) => {
  const key = req.query.k;
  if (!ALLOWED.has(key)) {                 // allow-listed keys only
    return res.status(400).send('forbidden key');
  }
  process.env['APP_' + key.toUpperCase()] = req.query.v;
  res.send('ok');
});
