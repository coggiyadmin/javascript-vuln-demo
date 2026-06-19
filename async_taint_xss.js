// Combination #4 — ASYNC × XSS (CWE-79, JS).
'use strict';
const express = require('express');
const app = express();
function render(q) { return '<p>' + q + '</p>'; } // CWE-79
app.get('/async', (req, res) => {
  const q = req.query.q || '';
  setImmediate(() => { res.send(render(q)); });
});
module.exports = app;
