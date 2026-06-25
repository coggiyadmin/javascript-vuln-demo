'use strict';
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: false }));

// Combination #4 — ASYNC TAINT × LOGINJ (CWE-117, JS). Taint carried through an
// async function, then reaches the sink. NO finding = FALSE NEGATIVE.

const ident = async (x) => x;

app.get('/a', async (req, res) => {
  const user = await ident(req.body.user || ''); // taint through await
  console.log('login user=' + user); // CWE-117
  res.end();
});
module.exports = app;
