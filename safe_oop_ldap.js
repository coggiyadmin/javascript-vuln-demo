'use strict';
// SAFE mirror — oop_ldap.js; LDAP filter metachars escaped before building the
// filter. Expect 0 security findings.
const express = require('express');
const ldap = require('ldapjs');
const app = express();
const client = ldap.createClient({ url: 'ldap://dir.internal' });

function esc(s) { return String(s).replace(/[*()\\\0]/g, (c) => '\\' + c.charCodeAt(0).toString(16)); }

class Directory {
  constructor(user) { this.user = user; }
  filter() { return '(uid=' + esc(this.user) + ')'; }      // escape LDAP metachars
  searchDirect(cb) { return client.search('ou=people', { filter: this.filter() }, cb); }
}

app.get('/dir', (req, res) => {
  const d = new Directory(req.query.user);
  d.searchDirect(() => {});
  res.end();
});
module.exports = app;
