/**
 * DEMO — reflected XSS in webmail-style message viewer (CWE-79 intake pattern).
 */
'use strict';
const express = require('express');
const app = express();

app.get('/mail/view', (req, res) => {
  const body = req.query.body || '';
  res.send(`<div class="message-body">${body}</div>`); // SINK CWE-79
});

module.exports = app;
