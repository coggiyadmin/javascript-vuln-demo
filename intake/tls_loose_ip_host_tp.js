/**
 * TP — identity check compares a loosely parsed IP to the certificate (CWE-295).
 * CVE-2026-106069 class: a host that loosely resolves to an IP is accepted.
 */
'use strict';
const tls = require('tls');

function looseIp(value) {
  return String(value).replace(/[^\d.]/g, '');
}

function checkServerIdentity(host, cert) {
  const cn = (cert.subject && cert.subject.CN) || '';
  if (looseIp(host) !== '' && looseIp(host) === looseIp(cn)) return undefined; // SINK CWE-295
  return new Error('mismatch');
}

function connect(userHost) {
  return tls.connect({ host: userHost, port: 443, servername: userHost, checkServerIdentity });
}

module.exports = { connect };
