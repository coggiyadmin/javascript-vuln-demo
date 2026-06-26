const express = require('express');
const ldap = require('ldapjs');
const app = express();
const client = ldap.createClient({ url: 'ldap://localhost' });
app.get('/l', (req, res) => {
  const uid = String(req.query.uid || '').replace(/&/g, '&amp;');
  client.search('dc=example,dc=com', { filter: '(uid=' + uid + ')' }, () => res.end('ok'));
});
