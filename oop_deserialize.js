'use strict';
// Combination #5 — OOP OBJECT FLOW × INSECURE DESERIALIZATION (CWE-502, JS). Tainted
// field fed to node-serialize.unserialize (IIFE RCE). NO finding = FALSE NEGATIVE.
const express = require('express');
const serialize = require('node-serialize');
const app = express();

class Session {
  constructor(blob) { this.blob = blob; }                  // field-carried taint
  get data() { return this.blob; }
  loadDirect() { return serialize.unserialize(this.blob); }   // 5a deserialize sink (CWE-502)
  loadViaGetter() { return serialize.unserialize(this.data); }// 5b via getter -> sink (CWE-502)
}

app.get('/restore', (req, res) => {
  const s = new Session(req.query.s);                      // SOURCE -> constructor
  s.loadDirect();
  s.loadViaGetter();
  res.end();
});
module.exports = app;
