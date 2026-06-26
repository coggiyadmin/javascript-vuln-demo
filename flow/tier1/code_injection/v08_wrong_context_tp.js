const express = require('express');
const sqlite3 = require('sqlite3');
const app = express();
app.get('/e', (req, res) => {
  const x = String(req.query.x || '0');
  new sqlite3.Database(':memory:').all('SELECT ' + x, () => {});
  res.send(String(eval(x)));
});
