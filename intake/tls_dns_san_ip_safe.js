/**
 * Safe mirror — IP endpoints require an iPAddress SAN. Platform verifier only.
 */
'use strict';
const tls = require('tls');

function connect(userHost) {
  if (/^\d+\.\d+\.\d+\.\d+$/.test(String(userHost))) {
    throw new Error('ip host requires platform ip-san check');
  }
  return tls.connect({ host: 'example.com', port: 443 });
}

module.exports = { connect };
