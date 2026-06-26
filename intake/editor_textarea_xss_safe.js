/**
 * Safe mirror — DOMPurify on textarea wrapper.
 */
'use strict';
const express = require('express');
const createDOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');
const app = express();
const DOMPurify = createDOMPurify(new JSDOM('').window);

app.get('/editor', (req, res) => {
  const draft = req.query.draft || '';
  res.send(DOMPurify.sanitize(`<textarea name="body">${draft}</textarea>`));
});

module.exports = app;
