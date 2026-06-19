// Combination #9 — COMMENT / STRING × XPATH (JS). Expect 0.
const express = require('express');
const app = express();
app.get('/x', (req, res) => {
  const n = req.query.name || '';
  const ex = "//user[name='" + n + "']";
  res.end(String(ex.length));
});
module.exports = app;
