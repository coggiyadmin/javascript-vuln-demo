const express = require('express'); const sqlite3 = require('sqlite3');
const app = express(); const db = new sqlite3.Database('app.db');
app.get('/u', (req, res) => {
  const name = String(req.query.name || '').replace(/'/g, '');
  db.all('SELECT * FROM users WHERE name=?', [name], (e, r) => res.json(r));
});
