// wrong_context mirror — path_traversal
const express = require('express'); const fs = require('fs'); const path = require('path');
const app = express(); const ROOT = '/data';
app.get('/r', (req, res) => {
  const full = path.resolve(ROOT, String(req.query.p || ''));
  if (!full.startsWith(ROOT)) return res.status(403).end();
  res.send(fs.readFileSync(full, 'utf8'));
});
