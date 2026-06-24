// SQLi variant: mysql2 client — query() with concatenation.
const express = require('express'); const mysql = require('mysql2/promise'); const app = express();
const pool = mysql.createPool({ host: 'localhost', user: 'u', password: 'p', database: 'app' });
app.get('/u', async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM accounts WHERE name="' + req.query.name + '"'); // SINK CWE-89
  res.json(rows);
});
