const express = require('express');
const ldap = require('ldapjs');
const app = express();
function companySanitize(x) { return String(x).replace(/\)/g, ''); }
const client = ldap.createClient({ url: 'ldap://localhost' });
app.get('/l', (req, res) => {
  const uid = companySanitize(req.query.uid || '');
  client.search('dc=example,dc=com', { filter: '(uid=' + uid + ')' }, () => res.end('ok'));
});
