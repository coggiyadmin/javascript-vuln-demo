// v09 guard-in-variable — host allowlist in module Set.
const express = require('express');
const { URL } = require('url');
const ALLOWED_HOSTS = new Set(['app.example.com', 'cdn.example.com']);
const app = express();
app.get('/go', (req, res) => {
  const nxt = String(req.query.next || '');
  const host = new URL(nxt, 'https://x').hostname;
  if (ALLOWED_HOSTS.has(host)) res.redirect(nxt);
  else res.redirect('/home');
});
module.exports = app;
