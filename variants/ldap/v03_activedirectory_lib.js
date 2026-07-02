const express = require('express'); const ActiveDirectory = require('activedirectory');
const app = express(); const ad = new ActiveDirectory({ url: 'ldap://dc.example.com' });
app.get('/u', (req, res) => {
  ad.findUsers('(sAMAccountName=' + req.query.user + ')', () => res.end('ok')); // SINK CWE-90 activedirectory
});
