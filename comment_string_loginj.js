// Combination #9 — COMMENT / STRING × LOG INJ (CWE-117, JS). Expect 0.
const express = require('express');
const app = express();
app.get('/x', (req, res) => {
  const u = req.query.user || '';
  // console.log(u)
  const ex = "console.log(u)";
  res.end(String(ex.length + u.length));
});
module.exports = app;
