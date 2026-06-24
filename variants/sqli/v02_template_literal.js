// SQLi variant: template-literal SQL assembly.
const express = require('express'); const { Pool } = require('pg'); const app = express(); const pool = new Pool();
app.get('/u', async (req, res) => {
  const r = await pool.query(`SELECT name FROM users WHERE email='${req.query.email}'`); // SINK CWE-89
  res.json(r.rows);
});
