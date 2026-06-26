const express = require('express');
const { URL } = require('url');
const app = express();
const BLOCK = new Set(['127.0.0.1', '169.254.169.254']);
app.get('/f', async (req, res) => {
  const u = new URL(String(req.query.url || ''));
  if (BLOCK.has(u.hostname) || !u.hostname.endsWith('.example.com')) return res.status(403).end();
  const r = await fetch(u.href);
  res.send(await r.text());
});
