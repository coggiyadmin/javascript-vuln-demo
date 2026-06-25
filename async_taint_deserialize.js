'use strict';
const express = require('express');
const serialize = require('node-serialize');
const app = express();
app.use(express.text());

// Combination #4 — ASYNC TAINT × DESERIALIZE (CWE-502, JS). Taint carried through an
// async function, then reaches the sink. NO finding = FALSE NEGATIVE.

const ident = async (x) => x;

app.post('/a', async (req, res) => {
  const body = await ident(req.body); // taint through await
  serialize.unserialize(body); // CWE-502
  res.end();
});
module.exports = app;
