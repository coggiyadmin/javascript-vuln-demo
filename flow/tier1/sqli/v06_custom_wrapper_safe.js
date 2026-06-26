const express = require('express');
const sqlite3 = require('sqlite3');
const app = express();
function companySanitize(x) { return String(x).replace(/'/g, ''); }
app.get('/u', (req, res) => {
  const n = companySanitize(req.query.name || '');
  new sqlite3.Database(':memory:').all("SELECT * FROM users WHERE name='" + n + "'", () => res.end('ok'));
});
