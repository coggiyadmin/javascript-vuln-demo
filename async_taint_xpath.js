'use strict';
const express = require('express');
const xpath = require('xpath');
const { DOMParser } = require('@xmldom/xmldom');
const app = express();
const doc = new DOMParser().parseFromString('<users/>', 'text/xml');

// Combination #4 — ASYNC TAINT × XPATH (CWE-643, JS). Taint carried through an
// async function, then reaches the sink. NO finding = FALSE NEGATIVE.

const ident = async (x) => x;

app.get('/a', async (req, res) => {
  const name = await ident(req.query.name || ''); // taint through await
  xpath.select("//user[name='" + name + "']", doc); // CWE-643
  res.end();
});
module.exports = app;
