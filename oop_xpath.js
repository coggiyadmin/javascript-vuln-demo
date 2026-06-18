'use strict';
// Combination #5 — OOP OBJECT FLOW × XPATH INJECTION (CWE-643, JS). NO finding = FALSE NEGATIVE.
const express = require('express');
const xpath = require('xpath');
const { DOMParser } = require('xmldom');
const app = express();
const doc = new DOMParser().parseFromString('<users/>');

class UserLookup {
  constructor(name) { this.name = name; }                  // field-carried taint
  get q() { return this.name; }
  findDirect() { return xpath.select("//user[name='" + this.name + "']", doc); }  // 5a CWE-643
  findViaGetter() { return xpath.select("//user[name='" + this.q + "']", doc); }  // 5b CWE-643
}

app.get('/lookup', (req, res) => {
  const u = new UserLookup(req.query.name);                // SOURCE -> constructor
  u.findDirect();
  u.findViaGetter();
  res.end();
});
module.exports = app;
