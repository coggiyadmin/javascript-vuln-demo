/**
 * TP — img onerror with user src (CWE-79 intake pattern).
 * CVE-2023-5631 class: webmail image tag XSS.
 */
'use strict';
const express = require('express');
const app = express();

app.get('/mail/img', (req, res) => {
  const src = req.query.src || '';
  res.send(`<img src="${src}" onerror="alert(1)">`); // SINK CWE-79
});

module.exports = app;
