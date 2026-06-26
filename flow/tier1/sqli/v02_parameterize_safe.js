const express = require('express'); const sqlite3 = require('sqlite3');
const app = express(); const db = new sqlite3.Database('app.db');
app.get('/u', (req, res) => {
  db.all('SELECT * FROM users WHERE name=?', [req.query.name], (e, r) => res.json(r));
});
