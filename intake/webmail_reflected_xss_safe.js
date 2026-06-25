/**
 * NEGATIVE TEST — safe mirror of webmail_reflected_xss_tp.js. Must stay clean.
 */
'use strict';
const express = require('express');
const createDOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');
const app = express();
const DOMPurify = createDOMPurify(new JSDOM('').window);

app.get('/mail/view', (req, res) => {
  const body = req.query.body || '';
  res.send(DOMPurify.sanitize(`<div class="message-body">${body}</div>`));
});

module.exports = app;
