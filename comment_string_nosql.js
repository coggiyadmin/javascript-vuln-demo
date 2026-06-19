// Combination #9 — COMMENT / STRING × NoSQL (JS). Expect 0.
const express = require('express');
const app = express();
app.get('/x', (req, res) => {
  const u = req.query.user || '';
  const ex = "$where: this.user == '" + u + "'";
  res.end(String(ex.length));
});
module.exports = app;
