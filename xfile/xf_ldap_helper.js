'use strict';
// Cross-file taint — SINK side (LDAP injection). Imported by xf_ldap_controller.js.
const ldap = require('ldapjs');
const client = ldap.createClient({ url: 'ldap://dir.internal' });
function search(user, cb) { return client.search('ou=people', { filter: '(uid=' + user + ')' }, cb); } // SINK CWE-90
module.exports = { search };
