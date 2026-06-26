/**
 * Safe mirror — DOMPurify on SVG fragment.
 */
'use strict';
const express = require('express');
const createDOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');
const app = express();
const DOMPurify = createDOMPurify(new JSDOM('').window);

app.get('/mail/svg', (req, res) => {
  const payload = req.query.payload || '';
  res.send(DOMPurify.sanitize(`<svg><text>${payload}</text></svg>`));
});

module.exports = app;
