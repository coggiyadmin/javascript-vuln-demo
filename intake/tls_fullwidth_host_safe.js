/**
 * Safe mirror — reject a non-canonical host and use the platform verifier.
 */
'use strict';
const tls = require('tls');

function connect(userHost) {
  if (String(userHost).normalize('NFKC') !== userHost) throw new Error('non-canonical host');
  return tls.connect({ host: 'example.com', port: 443 });
}

module.exports = { connect };
