/**
 * SAFE mirror — system_info_exposure.js; returns only a static health status.
 */
'use strict';
const express = require('express');
const app = express();

app.get('/debug', (req, res) => {
  res.json({ status: 'ok' });             // no system/env information disclosed
});
