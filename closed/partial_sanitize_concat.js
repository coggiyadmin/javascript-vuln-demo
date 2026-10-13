const express = require('express');
const escapeHtml = require('escape-html');
const app = express();
// cognium-dev#641 — sanitizing one operand must not clear the other
app.get('/f', (req, res) => {
  const a = req.query.a;
  const b = req.query.b;
  res.send(escapeHtml(a) + b); // SINK CWE-79
});
