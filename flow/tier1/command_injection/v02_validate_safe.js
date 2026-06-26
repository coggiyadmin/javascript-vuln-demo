const express = require('express');
const { execFile } = require('child_process');
const app = express(); const ALLOWED = new Set(['daily','weekly']);
app.get('/c', (req, res) => {
  const q = String(req.query.q || '');
  if (!ALLOWED.has(q)) return res.status(403).end();
  execFile('grep', [q, '/var/log/app.log'], () => res.end('ok'));
});
