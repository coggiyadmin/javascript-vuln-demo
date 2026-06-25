'use strict';
const express = require('express');
const libxml = require('libxmljs');
const app = express();
app.use(express.raw({ type: '*/*' }));

// Combination #3 — LOOP-CARRIED TAINT × XXE (CWE-611, JS). Taint flows through a
// loop into the sink. A handler with NO finding is a FALSE NEGATIVE.

// 3a. LIST BUILT IN LOOP
app.post('/list', (req, res) => {
  const items = [];
  for (const x of [].concat(req.body || [])) { items.push(x); }
  const body = items[0];
  libxml.parseXml(body); // CWE-611
  res.end();
});

// 3b. STRING ACCUMULATOR
app.post('/accum', (req, res) => {
  let body = '';
  for (const x of [].concat(req.body || [])) { body += x; }
  libxml.parseXml(body); // CWE-611
  res.end();
});

// 3c. ITERATE-AND-SINK
app.post('/iter', (req, res) => {
  for (const body of [].concat(req.body || [])) { libxml.parseXml(body); } // CWE-611 per iteration
  res.end();
});
module.exports = app;
