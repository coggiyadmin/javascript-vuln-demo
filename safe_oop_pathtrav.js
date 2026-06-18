'use strict';
// SAFE mirror — oop_pathtrav.js; the tainted name is reduced to its basename and
// confined to BASE before read. Expect 0 security findings.
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const BASE = '/srv/app/data/';

class Doc {
  constructor(name) { this.name = name; }
  safePath() {
    const leaf = path.basename(this.name);              // strip any ../ components
    const full = path.resolve(BASE, leaf);
    if (!full.startsWith(path.resolve(BASE))) throw new Error('escapes base');
    return full;
  }
  readDirect() { return fs.readFileSync(this.safePath()); }
}

app.get('/doc', (req, res) => {
  const d = new Doc(req.query.name);
  d.readDirect();
  res.end();
});
module.exports = app;
