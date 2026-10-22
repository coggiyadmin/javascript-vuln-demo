/**
 * TP — LDAP mail filter interpolates the caller email (CWE-90).
 * CVE-2026-15723 class: OmniAuth-to-LDAP auto-link lookup.
 */
'use strict';

function lookup(email) {
  const filter = '(mail=' + email + ')'; // SINK CWE-90
  return client.search('dc=example,dc=com', { filter });
}

module.exports = { lookup };
