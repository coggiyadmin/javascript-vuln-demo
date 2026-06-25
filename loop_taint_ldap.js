'use strict';
const express = require('express');
const ldap = require('ldapjs');
const app = express();
const client = ldap.createClient({ url: 'ldap://localhost' });

// Combination #3 — LOOP-CARRIED TAINT × LDAP (CWE-90, JS). Taint flows through a
// loop into the sink. A handler with NO finding is a FALSE NEGATIVE.

// 3a. LIST BUILT IN LOOP
app.get('/list', (req, res) => {
  const items = [];
  for (const x of [].concat(req.query.uid || [])) { items.push(x); }
  const uid = items[0];
  client.search('dc=example,dc=com', { filter: '(uid=' + uid + ')' }, () => {{}}); // CWE-90
  res.end();
});

// 3b. STRING ACCUMULATOR
app.get('/accum', (req, res) => {
  let uid = '';
  for (const x of [].concat(req.query.uid || [])) { uid += x; }
  client.search('dc=example,dc=com', { filter: '(uid=' + uid + ')' }, () => {{}}); // CWE-90
  res.end();
});

// 3c. ITERATE-AND-SINK
app.get('/iter', (req, res) => {
  for (const uid of [].concat(req.query.uid || [])) { client.search('dc=example,dc=com', { filter: '(uid=' + uid + ')' }, () => {{}}); } // CWE-90 per iteration
  res.end();
});
module.exports = app;
