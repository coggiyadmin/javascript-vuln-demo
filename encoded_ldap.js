// Combination #13 — ENCODED × LDAP (CWE-90, JS).
const express = require('express');
const ldap = require('ldapjs');
const app = express();
const client = ldap.createClient({ url: 'ldap://dir.internal' });
app.get('/b64', (req, res) => {
  const u = Buffer.from(req.query.d || '', 'base64').toString();
  client.search('ou=people', { filter: '(uid=' + u + ')' });
  res.end();
});
app.get('/url', (req, res) => {
  const u = decodeURIComponent(req.query.d || '');
  client.search('ou=people', { filter: '(uid=' + u + ')' });
  res.end();
});
module.exports = app;
