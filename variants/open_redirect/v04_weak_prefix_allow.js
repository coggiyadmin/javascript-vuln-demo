const express = require('express');
const app = express();
const ALLOW = ['https://app.example.com'];
app.get('/go', (req, res) => {
  const nxt = String(req.query.next || '');
  if (ALLOW.some(p => nxt.startsWith(p))) res.redirect(nxt); // SINK CWE-601 weak prefix allowlist
  else res.redirect('/home');
});
