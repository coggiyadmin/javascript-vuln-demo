const express = require('express');
const sqlite3 = require('sqlite3');
const app = express();
app.get('/go', (req, res) => {
  const nxt = String(req.query.next || '');
  new sqlite3.Database(':memory:').all("SELECT * FROM u WHERE n='" + nxt + "'", () => {});
  res.redirect(nxt);
});
