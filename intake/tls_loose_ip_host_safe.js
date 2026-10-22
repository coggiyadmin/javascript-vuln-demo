/**
 * Safe mirror — require a canonical dotted IP, then use the platform verifier.
 */
'use strict';
const tls = require('tls');

function connect(userHost) {
  if (!/^(?:\d{1,3}\.){3}\d{1,3}$/.test(String(userHost))) throw new Error('non-canonical host');
  return tls.connect({ host: 'example.com', port: 443 });
}

module.exports = { connect };
