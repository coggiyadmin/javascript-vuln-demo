'use strict';
const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const db = new MongoClient('mongodb://localhost').db('app');

// Combination #3 — LOOP-CARRIED TAINT × NOSQL (CWE-943, JS). Taint flows through a
// loop into the sink. A handler with NO finding is a FALSE NEGATIVE.

// 3a. LIST BUILT IN LOOP
app.get('/list', (req, res) => {
  const items = [];
  for (const x of [].concat(req.query.q || [])) { items.push(x); }
  const q = items[0];
  db.collection('u').find({ name: q }).toArray(); // CWE-943
  res.end();
});

// 3b. STRING ACCUMULATOR
app.get('/accum', (req, res) => {
  let q = '';
  for (const x of [].concat(req.query.q || [])) { q += x; }
  db.collection('u').find({ name: q }).toArray(); // CWE-943
  res.end();
});

// 3c. ITERATE-AND-SINK
app.get('/iter', (req, res) => {
  for (const q of [].concat(req.query.q || [])) { db.collection('u').find({ name: q }).toArray(); } // CWE-943 per iteration
  res.end();
});
module.exports = app;
