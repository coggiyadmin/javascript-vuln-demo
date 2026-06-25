'use strict';
const express = require('express');
const serialize = require('node-serialize');
const app = express();
app.use(express.text());

// Combination #3 — LOOP-CARRIED TAINT × DESERIALIZE (CWE-502, JS). Taint flows through a
// loop into the sink. A handler with NO finding is a FALSE NEGATIVE.

// 3a. LIST BUILT IN LOOP
app.post('/list', (req, res) => {
  const items = [];
  for (const x of [].concat(req.body || [])) { items.push(x); }
  const body = items[0];
  serialize.unserialize(body); // CWE-502
  res.end();
});

// 3b. STRING ACCUMULATOR
app.post('/accum', (req, res) => {
  let body = '';
  for (const x of [].concat(req.body || [])) { body += x; }
  serialize.unserialize(body); // CWE-502
  res.end();
});

// 3c. ITERATE-AND-SINK
app.post('/iter', (req, res) => {
  for (const body of [].concat(req.body || [])) { serialize.unserialize(body); } // CWE-502 per iteration
  res.end();
});
module.exports = app;
