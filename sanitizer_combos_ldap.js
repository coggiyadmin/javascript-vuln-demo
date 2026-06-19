// Combinations #6/#7/#8 — SANITIZER × LDAP (CWE-90, JS).
const express = require('express');
const ldap = require('ldapjs');
const app = express();
const client = ldap.createClient({ url: 'ldap://dir.internal' });
function escapeHtml(s) { return String(s).replace(/[<>&]/g, '_'); }
function sanitizeUser(u) { return u; }
function ldapSafe(u) { return String(u).replace(/[()=*\\]/g, ''); }
app.get('/wrong', (req, res) => { client.search('ou=people', { filter: '(uid=' + escapeHtml(req.query.user || '') + ')' }); res.end(); }); // CWE-90
app.get('/fake', (req, res) => { client.search('ou=people', { filter: '(uid=' + sanitizeUser(req.query.user || '') + ')' }); res.end(); }); // CWE-90
app.get('/wrapped', (req, res) => { client.search('ou=people', { filter: '(uid=' + ldapSafe(req.query.user || '') + ')' }); res.end(); }); // expect 0
module.exports = app;
