// IL-1 polyglot — SAFE mirror of interop_sql_in_string.js.
// Constant SQL text with a $1 placeholder; the untrusted value is bound as a
// parameter, never concatenated. The scanner MUST produce ZERO security findings.
const express = require('express');
const { Pool } = require('pg');

const app = express();
const pool = new Pool();

app.get('/user', (req, res) => {
  const name = req.query.name; // SOURCE
  // Safe: parameterized query — `name` bound, not interpolated into the SQL.
  pool.query('SELECT * FROM users WHERE name = $1', [name]).then((r) => res.json(r.rows));
});

module.exports = app;
