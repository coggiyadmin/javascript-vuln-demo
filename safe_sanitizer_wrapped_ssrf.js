'use strict';
const express = require('express'); const http = require('http');
const app = express(); const ALLOWED = new Set(['api.internal.example.com']);
function checkedUrl(u) {
  const host = new URL(u).hostname;
  if (!ALLOWED.has(host)) throw new Error('bad host');
  return u;
}
app.get('/wrapped', (req, res) => { http.get(checkedUrl(String(req.query.url || ''))); res.end('ok'); });
module.exports = app;
