// Combination #9 — COMMENT / STRING × DESER (JS). Expect 0.
const express = require('express');
const app = express();
app.get('/x', (req, res) => {
  const s = req.query.s || '';
  const ex = "unserialize(s)";
  res.end(String(ex.length + s.length));
});
module.exports = app;
