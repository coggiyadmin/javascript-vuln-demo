'use strict';
// SAFE mirror — oop_xpath.js; value bound as an XPath variable via a custom
// resolver instead of being concatenated into the query. Expect 0 findings.
const express = require('express');
const xpath = require('xpath');
const { DOMParser } = require('xmldom');
const app = express();
const doc = new DOMParser().parseFromString('<users/>');

class UserLookup {
  constructor(name) { this.name = name; }
  findDirect() {
    const sel = xpath.parse("//user[name=$n]");
    return sel.select1({ node: doc, variables: { n: this.name } });  // parameterized, no concat
  }
}

app.get('/lookup', (req, res) => {
  const u = new UserLookup(req.query.name);
  u.findDirect();
  res.end();
});
module.exports = app;
