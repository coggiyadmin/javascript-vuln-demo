'use strict';
// Combination #5 — OOP OBJECT FLOW × SSRF (CWE-918, JS). Taint stored on an
// instance field, fetched in a method sink (directly and via a getter).
// NO finding = FALSE NEGATIVE.
const express = require('express');
const http = require('http');
const app = express();

class Fetcher {
  constructor(url) { this.url = url; }              // field-carried taint
  get target() { return this.url; }                 // getter exposes tainted field
  fetchDirect() { return http.get(this.url); }      // 5a field -> SSRF sink (CWE-918)
  fetchViaGetter() { return http.get(this.target); }// 5b via getter -> sink (CWE-918)
}

app.get('/fetch', (req, res) => {
  const f = new Fetcher(req.query.url);             // SOURCE -> constructor
  f.fetchDirect();
  f.fetchViaGetter();
  res.end();
});
module.exports = app;
