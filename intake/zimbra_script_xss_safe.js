/**
 * Safe mirror — DOMPurify on rendered fragment (mirrors webmail_reflected_xss_safe.js).
 */
'use strict';
const express = require('express');
const createDOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');
const app = express();
const DOMPurify = createDOMPurify(new JSDOM('').window);

app.get('/zimbra/mail', (req, res) => {
  const fragment = req.query.fragment || '';
  res.send(DOMPurify.sanitize(`<div class="zm-msg">${fragment}</div>`));
});

module.exports = app;
