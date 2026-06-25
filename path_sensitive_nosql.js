'use strict';
const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const db = new MongoClient('mongodb://localhost').db('app');

// Combination #2 — PATH-SENSITIVITY × NOSQL (CWE-943, JS). Each handler is a REAL
// NOSQL on at least one path. A handler with NO finding is a FALSE NEGATIVE.

// 2a. NEGATED GUARD — tainted value used in the failure branch
app.get('/neg', (req, res) => {
  const q = req.query.q || '';
  if (q === 'safe') { /* guard covers only literal */ } else { db.collection('u').find({ name: q }).toArray(); } // CWE-943
  res.end();
});

// 2b. ONE-BRANCH CONSTRAINT — else path leaves value unchecked
app.get('/onebranch', (req, res) => {
  let q = req.query.q || '';
  if (false) { q = 'safe_literal'; } // dead branch
  db.collection('u').find({ name: q }).toArray(); // CWE-943
  res.end();
});

// 2c. EARLY-RETURN GUARD that does NOT cover the sink path
app.get('/early', (req, res) => {
  const q = req.query.q || '';
  if (!q) { res.end('empty'); return; }
  db.collection('u').find({ name: q }).toArray(); // CWE-943
  res.end();
});
module.exports = app;
