'use strict';
const express = require('express'); const app = express();
const ALLOWED = new Set(['/home', '/dashboard']);
app.get('/wrapped', (req, res) => {
  const nxt = String(req.query.next || '');
  if (!ALLOWED.has(nxt)) return res.status(403).end();
  res.redirect(nxt);
});
module.exports = app;
