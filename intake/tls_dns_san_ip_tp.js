/**
 * TP — a DNS SAN is treated as proof of an IP endpoint (CWE-295).
 * CVE-2026-106072 class: non-canonical IPv4 host authenticated by a DNS name.
 */
'use strict';
const tls = require('tls');

function checkServerIdentity(host, cert) {
  const sans = String(cert.subjectaltname || '');
  if (/^\d+\.\d+\.\d+\.\d+$/.test(String(host)) && sans.includes('DNS:')) return undefined; // SINK CWE-295
  return new Error('mismatch');
}

function connect(userHost) {
  return tls.connect({ host: userHost, port: 443, servername: userHost, checkServerIdentity });
}

module.exports = { connect };
