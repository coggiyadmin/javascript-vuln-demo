// Combination #9 — COMMENT / STRING × XXE (JS). Expect 0.
const express = require('express');
const app = express();
app.get('/x', (req, res) => {
  const x = req.query.xml || '';
  const ex = "parseXml(x)";
  res.end(String(ex.length + x.length));
});
module.exports = app;
