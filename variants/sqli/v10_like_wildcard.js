// SQLi variant: LIKE clause with unescaped user wildcard injection.
const express = require('express'); const { Pool } = require('pg'); const app = express(); const pool = new Pool();
app.get('/u', async (req, res) => {
  const r = await pool.query("SELECT * FROM users WHERE name LIKE '%" + req.query.name + "%'"); // SINK CWE-89 LIKE
  res.json(r.rows);
});
