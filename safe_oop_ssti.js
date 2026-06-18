'use strict';
// SAFE mirror — oop_ssti.js; value passed as template DATA (escaped interpolation),
// not concatenated into template source. Expect 0 security findings.
const express = require('express');
const ejs = require('ejs');
const app = express();

class Greeting {
  constructor(name) { this.name = name; }
  renderDirect() { return ejs.render('<p>Hello <%= n %></p>', { n: this.name }); }  // data, not source
}

app.get('/hello', (req, res) => {
  const g = new Greeting(req.query.name);
  res.end(g.renderDirect());
});
module.exports = app;
