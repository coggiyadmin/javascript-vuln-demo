'use strict';
/** B-tier PAT-INFO-01 — debug response leaks env (CWE-200). */
const express = require('express');
const app = express();
app.get('/debug', (req, res) => {
  res.json({ token: process.env.API_TOKEN, q: req.query.q }); // SINK CWE-200
});
module.exports = app;
