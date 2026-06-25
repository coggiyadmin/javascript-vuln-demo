'use strict';
const express = require('express');
const ldap = require('ldapjs');
const app = express();
const client = ldap.createClient({ url: 'ldap://localhost' });

// Combination #4 — ASYNC TAINT × LDAP (CWE-90, JS). Taint carried through an
// async function, then reaches the sink. NO finding = FALSE NEGATIVE.

const ident = async (x) => x;

app.get('/a', async (req, res) => {
  const uid = await ident(req.query.uid || ''); // taint through await
  client.search('dc=example,dc=com', { filter: '(uid=' + uid + ')' }, () => {{}}); // CWE-90
  res.end();
});
module.exports = app;
