const express = require('express');
const ldap = require('ldapjs');
const app = express();
const client = ldap.createClient({ url: 'ldap://localhost' });
app.get('/l', (req, res) => {
  const uid = String(req.query.uid || '');
  if (!uid || uid.length > 64) return res.status(400).end();
  if (!/^[a-zA-Z0-9_-]+$/.test(uid)) return res.status(403).end();
  client.search('dc=example,dc=com', { filter: '(uid=' + uid + ')' }, () => res.end('ok'));
});
