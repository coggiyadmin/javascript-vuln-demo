/**
 * Safe mirror — JSON-only flight handler (structural clone of safe_oop_deserialize.js).
 */
'use strict';
const express = require('express');
const app = express();

class Session {
  constructor(blob) { this.blob = blob; }
  loadDirect() { return JSON.parse(this.blob); }
}

app.get('/_flight', (req, res) => {
  const s = new Session(req.query.s);
  s.loadDirect();
  res.end();
});

module.exports = app;
