// IL-1 polyglot — JavaScript → SQL DSL (CWE-89).
// Host (JS) assembles a guest-language (SQL) statement in a string literal from
// untrusted input and executes it via the DB client.
const express = require('express');
const { Pool } = require('pg');

const app = express();
const pool = new Pool();

app.get('/user', (req, res) => {
  const name = req.query.name; // SOURCE (HTTP param)
  // SINK (CWE-89): SQL guest-language statement assembled in a JS string.
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  pool.query(query).then((r) => res.json(r.rows));
});

module.exports = app;
