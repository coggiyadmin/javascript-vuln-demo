'use strict';
// Combination #5 — OOP OBJECT FLOW × SSTI (CWE-1336, JS). Tainted field concatenated
// into an EJS template source. NO finding = FALSE NEGATIVE.
const express = require('express');
const ejs = require('ejs');
const app = express();

class Greeting {
  constructor(name) { this.name = name; }                  // field-carried taint
  get who() { return this.name; }
  renderDirect() { return ejs.render('<p>Hello ' + this.name + '</p>'); }  // 5a SSTI (CWE-1336)
  renderViaGetter() { return ejs.render('<p>Hi ' + this.who + '</p>'); }   // 5b SSTI (CWE-1336)
}

app.get('/hello', (req, res) => {
  const g = new Greeting(req.query.name);                  // SOURCE -> constructor
  g.renderViaGetter();
  res.end(g.renderDirect());
});
module.exports = app;
