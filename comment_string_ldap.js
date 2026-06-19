// Combination #9 — COMMENT / STRING × LDAP (JS). Expect 0.
const express = require('express');
const app = express();
app.get('/x', (req, res) => {
  const u = req.query.user || '';
  const ex = "(uid=" + u + ")";
  res.end(String(ex.length));
});
module.exports = app;
