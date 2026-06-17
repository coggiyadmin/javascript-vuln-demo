/**
 * FN probe — CWE-79 reflected XSS (isolated per-language category probe).
 * Source bound to local var; express app (not Router); no module.exports (#77).
 */
'use strict';
const express = require('express');
const app = express();

app.get('/search', (req, res) => {
  const q = req.query.q;
  res.send('<html><body><h1>Results for: ' + q + '</h1></body></html>');
});
