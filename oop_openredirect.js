'use strict';
// Combination #5 — OOP OBJECT FLOW × OPEN REDIRECT (CWE-601, JS). Taint stored on
// an instance field, used in a method sink (directly and via a getter).
// NO finding = FALSE NEGATIVE.
const express = require('express');
const app = express();

class Navigation {
  constructor(url) { this.url = url; }                  // field-carried taint
  get destination() { return this.url; }                 // getter exposes tainted field
  goDirect(res) { return res.redirect(this.url); }       // 5a -> redirect sink (CWE-601)
  goViaGetter(res) { return res.redirect(this.destination); } // 5b via getter -> sink (CWE-601)
}

app.get('/login', (req, res) => {
  const nav = new Navigation(req.query.next);            // SOURCE -> constructor
  nav.goDirect(res);
});
module.exports = app;
