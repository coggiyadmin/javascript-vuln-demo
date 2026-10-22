/**
 * TP — identity check accepts a host after Unicode compatibility folding (CWE-295).
 * CVE-2026-105483 class: fullwidth digits compared as a certificate hostname.
 */
'use strict';
const tls = require('tls');

function checkServerIdentity(host, cert) {
  const presented = String(host).normalize('NFKC');
  const cn = String((cert.subject && cert.subject.CN) || '').normalize('NFKC');
  if (presented === cn) return undefined; // SINK CWE-295 — accept
  return new Error('mismatch');
}

function connect(userHost) {
  return tls.connect({ host: userHost, port: 443, servername: userHost, checkServerIdentity });
}

module.exports = { connect };
