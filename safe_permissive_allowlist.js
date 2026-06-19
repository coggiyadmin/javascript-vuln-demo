/**
 * SAFE mirror — permissive_allowlist.js; exact host allow-list (parsed origin equality).
 */
'use strict';
const express = require('express');
const app = express();
const ALLOWED_HOSTS = new Set(['trusted.com', 'www.trusted.com']);

app.get('/fetch', (req, res) => {
  let host;
  try { host = new URL(req.query.url).host; } catch { return res.status(400).send('bad url'); }
  if (!ALLOWED_HOSTS.has(host)) {          // exact-match allow-list
    return res.status(400).send('blocked');
  }
  res.redirect(req.query.url);
});
