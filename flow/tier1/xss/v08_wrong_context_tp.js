const express = require('express');
const sqlite3 = require('sqlite3');
const app = express();
app.get('/s', (req, res) => {
  const q = String(req.query.q || '');
  new sqlite3.Database(':memory:').all("SELECT * FROM u WHERE n='" + q + "'", () => {});
  res.send('<h1>' + q + '</h1>');
});
