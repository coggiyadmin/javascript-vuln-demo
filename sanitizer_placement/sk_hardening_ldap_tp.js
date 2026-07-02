"use strict";
const ldap = require("ldapjs");
const express = require("express");
const app = express();
const client = ldap.createClient({ url: 'ldap://localhost' });
app.get('/l', (req, res) => {
  const uid = String(req.query.uid || '').replace(/\*/g, '');
  client.search('dc=example,dc=com', { filter: '(uid=' + uid + ')' }, () => res.end('ok'));
});
module.exports = app;
