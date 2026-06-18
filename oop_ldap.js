'use strict';
// Combination #5 — OOP OBJECT FLOW × LDAP INJECTION (CWE-90, JS). NO finding = FALSE NEGATIVE.
const express = require('express');
const ldap = require('ldapjs');
const app = express();
const client = ldap.createClient({ url: 'ldap://dir.internal' });

class Directory {
  constructor(user) { this.user = user; }                  // field-carried taint
  get uid() { return this.user; }
  searchDirect(cb) { return client.search('ou=people', { filter: '(uid=' + this.user + ')' }, cb); }  // 5a CWE-90
  searchViaGetter(cb) { return client.search('ou=people', { filter: '(uid=' + this.uid + ')' }, cb); }// 5b CWE-90
}

app.get('/dir', (req, res) => {
  const d = new Directory(req.query.user);                 // SOURCE -> constructor
  d.searchDirect(() => {});
  res.end();
});
module.exports = app;
