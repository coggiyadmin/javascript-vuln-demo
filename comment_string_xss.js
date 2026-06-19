// Combination #9 — COMMENT / STRING × XSS (JS). Expect 0.
'use strict';
const express = require('express');
const app = express();
app.get('/x', (req, res) => {
  const q = req.query.q || '';
  const ex = "<p>" + q + "</p>";
  res.end(String(ex.length));
});
module.exports = app;
