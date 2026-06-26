const express = require('express'); const { URL } = require('url');
const app = express(); const ALLOWED = new Set(['api.internal.example.com']);
app.get('/f', async (req, res) => {
  const u = new URL(String(req.query.url || ''));
  if (!ALLOWED.has(u.hostname)) return res.status(403).end();
  const r = await fetch(u.href); res.send(await r.text());
});
