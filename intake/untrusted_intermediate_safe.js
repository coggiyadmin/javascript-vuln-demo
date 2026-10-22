/**
 * Safe mirror — denylist the untrusted intermediate before any trust decision.
 */
'use strict';

const DENY = new Set(['EXAMPLE-UNTRUSTED-INTERMEDIATE']);

function accepts(name) {
  if (DENY.has(name)) return false;
  return name === 'Example Root CA';
}

module.exports = { accepts };
