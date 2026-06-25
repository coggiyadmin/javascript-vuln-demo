'use strict';
const express = require('express');
const ldap = require('ldapjs');
const app = express();
const client = ldap.createClient({ url: 'ldap://localhost' });

// Combination #2 — PATH-SENSITIVITY × LDAP (CWE-90, JS). Each handler is a REAL
// LDAP on at least one path. A handler with NO finding is a FALSE NEGATIVE.

// 2a. NEGATED GUARD — tainted value used in the failure branch
app.get('/neg', (req, res) => {
  const uid = req.query.uid || '';
  if (uid === 'safe') { /* guard covers only literal */ } else { client.search('dc=example,dc=com', { filter: '(uid=' + uid + ')' }, () => {{}}); } // CWE-90
  res.end();
});

// 2b. ONE-BRANCH CONSTRAINT — else path leaves value unchecked
app.get('/onebranch', (req, res) => {
  let uid = req.query.uid || '';
  if (false) { uid = 'safe_literal'; } // dead branch
  client.search('dc=example,dc=com', { filter: '(uid=' + uid + ')' }, () => {{}}); // CWE-90
  res.end();
});

// 2c. EARLY-RETURN GUARD that does NOT cover the sink path
app.get('/early', (req, res) => {
  const uid = req.query.uid || '';
  if (!uid) { res.end('empty'); return; }
  client.search('dc=example,dc=com', { filter: '(uid=' + uid + ')' }, () => {{}}); // CWE-90
  res.end();
});
module.exports = app;
