'use strict';
// Combination #5 — OOP OBJECT FLOW × PATH TRAVERSAL (CWE-22, JS). Taint stored on
// an instance field, read in a method sink (directly and via a getter).
// NO finding = FALSE NEGATIVE.
const express = require('express');
const fs = require('fs');
const app = express();
const BASE = '/srv/app/data/';

class Doc {
  constructor(name) { this.name = name; }              // field-carried taint
  get filename() { return this.name; }                  // getter exposes tainted field
  readDirect() { return fs.readFileSync(BASE + this.name); }      // 5a -> open sink (CWE-22)
  readViaGetter() { return fs.readFileSync(BASE + this.filename); }// 5b via getter -> sink (CWE-22)
}

app.get('/doc', (req, res) => {
  const d = new Doc(req.query.name);                    // SOURCE -> constructor
  d.readDirect();
  d.readViaGetter();
  res.end();
});
module.exports = app;
