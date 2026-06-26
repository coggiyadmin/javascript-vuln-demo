'use strict';
const express = require('express'); const app = express();
const ALLOWED = new Set(['hello', 'status']);
app.get('/wrapped', (req, res) => {
  const t = String(req.query.t || '');
  if (!ALLOWED.has(t)) return res.status(403).end();
  res.end('ok');
});
module.exports = app;
