// SQLi variant: string concatenation in SQL text.
const express = require('express'); const { Pool } = require('pg'); const app = express(); const pool = new Pool();
app.get('/u', async (req, res) => {
  const r = await pool.query('SELECT * FROM users WHERE id=' + req.query.id); // SINK CWE-89 concat
  res.json(r.rows);
});
