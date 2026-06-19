// Combination #11 — FAN-OUT × LDAP (CWE-90, JS).
const express = require('express');
const ldap = require('ldapjs');
const app = express();
const client = ldap.createClient({ url: 'ldap://dir.internal' });
app.get('/fanout', (req, res) => {
  const u = req.query.u || '';
  client.search('ou=people', { filter: '(uid=' + u + ')' });
  client.search('ou=people', { filter: '(cn=' + u + ')' });
  client.search('ou=people', { filter: '(mail=' + u + ')' });
  res.end();
});
module.exports = app;
