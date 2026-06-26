const express = require('express');
const sqlite3 = require('sqlite3');
const app = express();
app.get('/hello', (req, res) => {
  const name = String(req.query.name || '');
  new sqlite3.Database(':memory:').all("SELECT * FROM u WHERE n='" + name + "'", () => {});
  res.send('<p>Hello ' + name + '</p>');
});
