/**
 * SAFE mirror — permissive_allowlist.js; exact host allow-list (parsed origin equality).
 */
'use strict';
const express = require('express');
const app = express();
const ALLOWED_HOSTS = new Set(['trusted.com', 'www.trusted.com']);

app.get('/fetch', (req, res) => {
  let parsed;
  try { parsed = new URL(req.query.url); } catch { return res.status(400).send('bad url'); }
  if (!ALLOWED_HOSTS.has(parsed.host)) {   // exact-match allow-list
    return res.status(400).send('blocked');
  }
  res.redirect(parsed.href);               // normalized URL, no CRLF passthrough
});
