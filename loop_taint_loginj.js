'use strict';
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: false }));

// Combination #3 — LOOP-CARRIED TAINT × LOGINJ (CWE-117, JS). Taint flows through a
// loop into the sink. A handler with NO finding is a FALSE NEGATIVE.

// 3a. LIST BUILT IN LOOP
app.get('/list', (req, res) => {
  const items = [];
  for (const x of [].concat(req.query.user || [])) { items.push(x); }
  const user = items[0];
  console.log('login user=' + user); // CWE-117
  res.end();
});

// 3b. STRING ACCUMULATOR
app.get('/accum', (req, res) => {
  let user = '';
  for (const x of [].concat(req.query.user || [])) { user += x; }
  console.log('login user=' + user); // CWE-117
  res.end();
});

// 3c. ITERATE-AND-SINK
app.get('/iter', (req, res) => {
  for (const user of [].concat(req.query.user || [])) { console.log('login user=' + user); } // CWE-117 per iteration
  res.end();
});
module.exports = app;
