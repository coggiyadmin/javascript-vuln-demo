// SQLi variant: sqlite3 db.run with concatenated SQL.
const express = require('express'); const sqlite3 = require('sqlite3'); const app = express();
const db = new sqlite3.Database(':memory:');
app.get('/u', (req, res) => {
  db.all('SELECT * FROM logs WHERE msg="' + req.query.q + '"', (err, rows) => { res.json(rows); }); // SINK CWE-89
});
