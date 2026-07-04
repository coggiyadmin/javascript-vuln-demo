// v10 allowlist-set — prefix array gate before redirect.
const express = require('express');
const ALLOWED_PREFIXES = ['https://app.example.com/', 'https://cdn.example.com/'];
const app = express();
app.get('/go', (req, res) => {
  const nxt = String(req.query.next || '');
  if (ALLOWED_PREFIXES.some(p => nxt.startsWith(p))) res.redirect(nxt);
  else res.redirect('/home');
});
module.exports = app;
