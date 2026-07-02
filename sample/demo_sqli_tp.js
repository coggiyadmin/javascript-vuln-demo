'use strict';
/** Demo-tree TP (CWE-89) — intentional vuln under sample/ for --exclude-demos gate. */
const express = require('express');
const app = express();
app.get('/demo', (req, res) => {
  const q = req.query.q || '';
  require('sqlite3').verbose().new(':memory:').run("SELECT * FROM u WHERE n='" + q + "'"); // SINK CWE-89
});
module.exports = app;
