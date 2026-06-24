// TP control (CWE-89, js) — column concatenated from an HTTP source with NO validation. Proves
// the engine fires on the genuine sink, so safe_sql_identifier_quote.js staying clean means the
// validation guard is credited (not an engine blind spot).
const express = require('express');
const app = express();
app.get('/items', (req, res) => {
  const col = req.query.col; // attacker-controlled, NOT validated
  return db.query('SELECT * FROM items WHERE ' + col + ' = 1'); // SINK
});
module.exports = { app };
