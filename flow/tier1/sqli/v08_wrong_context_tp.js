const express = require('express');
const sqlite3 = require('sqlite3');
const app = express();
app.get('/u', (req, res) => {
  const n = String(req.query.name || '').replace(/&/g, '&amp;');
  new sqlite3.Database(':memory:').all("SELECT * FROM users WHERE name='" + n + "'", () => res.end('ok'));
});
