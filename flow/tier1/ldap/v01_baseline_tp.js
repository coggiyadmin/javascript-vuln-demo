const express = require('express'); const ldap = require('ldapjs');
const app = express(); const client = ldap.createClient({ url: 'ldap://localhost' });
app.get('/l', (req, res) => {
  const filter = '(uid=' + req.query.uid + ')'; // SINK CWE-90
  client.search('dc=example,dc=com', { filter }, () => res.end());
});
