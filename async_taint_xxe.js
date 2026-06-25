'use strict';
const express = require('express');
const libxml = require('libxmljs');
const app = express();
app.use(express.raw({ type: '*/*' }));

// Combination #4 — ASYNC TAINT × XXE (CWE-611, JS). Taint carried through an
// async function, then reaches the sink. NO finding = FALSE NEGATIVE.

const ident = async (x) => x;

app.post('/a', async (req, res) => {
  const body = await ident(req.body); // taint through await
  libxml.parseXml(body); // CWE-611
  res.end();
});
module.exports = app;
