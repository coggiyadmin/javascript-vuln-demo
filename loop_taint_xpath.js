'use strict';
const express = require('express');
const xpath = require('xpath');
const { DOMParser } = require('@xmldom/xmldom');
const app = express();
const doc = new DOMParser().parseFromString('<users/>', 'text/xml');

// Combination #3 — LOOP-CARRIED TAINT × XPATH (CWE-643, JS). Taint flows through a
// loop into the sink. A handler with NO finding is a FALSE NEGATIVE.

// 3a. LIST BUILT IN LOOP
app.get('/list', (req, res) => {
  const items = [];
  for (const x of [].concat(req.query.name || [])) { items.push(x); }
  const name = items[0];
  xpath.select("//user[name='" + name + "']", doc); // CWE-643
  res.end();
});

// 3b. STRING ACCUMULATOR
app.get('/accum', (req, res) => {
  let name = '';
  for (const x of [].concat(req.query.name || [])) { name += x; }
  xpath.select("//user[name='" + name + "']", doc); // CWE-643
  res.end();
});

// 3c. ITERATE-AND-SINK
app.get('/iter', (req, res) => {
  for (const name of [].concat(req.query.name || [])) { xpath.select("//user[name='" + name + "']", doc); } // CWE-643 per iteration
  res.end();
});
module.exports = app;
