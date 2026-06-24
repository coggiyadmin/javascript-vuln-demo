// SQLi variant: ORDER BY clause injection (non-WHERE sink).
const express = require('express'); const { Pool } = require('pg'); const app = express(); const pool = new Pool();
app.get('/u', async (req, res) => {
  const r = await pool.query('SELECT id,name FROM users ORDER BY ' + req.query.sort); // SINK CWE-89 ORDER BY
  res.json(r.rows);
});
