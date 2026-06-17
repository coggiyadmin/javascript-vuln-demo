/**
 * SAFE mirror — xss_probe.js; encode + DOMPurify before HTML render.
 */
'use strict';
const express = require('express');
const createDOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');

const app = express();
const DOMPurify = createDOMPurify(new JSDOM('').window);

app.get('/search', (req, res) => {
  const q = req.query.q || '';
  const safe = DOMPurify.sanitize(String(q));
  res.send('<html><body><h1>Results for: ' + safe + '</h1></body></html>');
});
