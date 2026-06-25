'use strict';
const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const db = new MongoClient('mongodb://localhost').db('app');

// Combination #4 — ASYNC TAINT × NOSQL (CWE-943, JS). Taint carried through an
// async function, then reaches the sink. NO finding = FALSE NEGATIVE.

const ident = async (x) => x;

app.get('/a', async (req, res) => {
  const q = await ident(req.query.q || ''); // taint through await
  db.collection('u').find({ name: q }).toArray(); // CWE-943
  res.end();
});
module.exports = app;
