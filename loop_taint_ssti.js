'use strict';
const express = require('express');
const ejs = require('ejs');
const app = express();

// Combination #3 — LOOP-CARRIED TAINT × SSTI (CWE-1336, JS). Taint flows through a
// loop into the sink. A handler with NO finding is a FALSE NEGATIVE.

// 3a. LIST BUILT IN LOOP
app.get('/list', (req, res) => {
  const items = [];
  for (const x of [].concat(req.query.t || [])) { items.push(x); }
  const t = items[0];
  ejs.render(t); // CWE-1336
  res.end();
});

// 3b. STRING ACCUMULATOR
app.get('/accum', (req, res) => {
  let t = '';
  for (const x of [].concat(req.query.t || [])) { t += x; }
  ejs.render(t); // CWE-1336
  res.end();
});

// 3c. ITERATE-AND-SINK
app.get('/iter', (req, res) => {
  for (const t of [].concat(req.query.t || [])) { ejs.render(t); } // CWE-1336 per iteration
  res.end();
});
module.exports = app;
