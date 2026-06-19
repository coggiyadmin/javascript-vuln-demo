// Format-string combo probes (CWE-134) — rule gap #86/FN-22.
'use strict';
const express = require('express');
const app = express();
app.get('/wrong', (req, res) => {
  const f = (req.query.fmt || '{name}').replace('<', '');
  res.end(f.replace('{name}', 'guest'));
});
app.get('/fake', (req, res) => {
  const f = req.query.fmt || '{name}';
  res.end(f.replace('{name}', 'guest'));
});
module.exports = app;
