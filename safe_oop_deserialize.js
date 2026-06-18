'use strict';
// SAFE mirror — oop_deserialize.js; JSON.parse (data-only) instead of node-serialize.
// Expect 0 security findings.
const express = require('express');
const app = express();

class Session {
  constructor(blob) { this.blob = blob; }
  loadDirect() { return JSON.parse(this.blob); }           // data-only parse, no code exec
}

app.get('/restore', (req, res) => {
  const s = new Session(req.query.s);
  s.loadDirect();
  res.end();
});
module.exports = app;
