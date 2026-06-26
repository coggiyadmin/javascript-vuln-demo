const express = require('express');
const sqlite3 = require('sqlite3');
const app = express();
app.get('/u', (req, res) => {
  const n = String(req.query.name || '');
  if (!/^[A-Za-z0-9]+$/.test(n)) return res.status(400).end();
  new sqlite3.Database(':memory:').all('SELECT * FROM users WHERE name=?', [n], () => res.end('ok'));
});
