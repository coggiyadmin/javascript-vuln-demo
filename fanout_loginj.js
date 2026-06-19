// Combination #11 — FAN-OUT × LOG INJ (CWE-117, JS).
const express = require('express');
const app = express();
app.get('/fanout', (req, res) => {
  const u = req.query.u || '';
  console.log('a ' + u);
  console.warn('b ' + u);
  console.error('c ' + u);
  res.end();
});
module.exports = app;
