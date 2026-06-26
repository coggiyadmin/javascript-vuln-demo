const express = require('express');
const sqlite3 = require('sqlite3');
const app = express();
app.get('/u', (req, res) => {
  const db = new sqlite3.Database('app.db');
  db.all('SELECT * FROM users WHERE name=?', [String(req.query.name || '')], () => res.end('ok'));
});
