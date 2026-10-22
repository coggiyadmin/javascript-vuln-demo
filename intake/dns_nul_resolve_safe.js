/**
 * Safe mirror — reject a NUL, then resolve a fixed name.
 */
'use strict';
const dns = require('dns');

function lookup(name) {
  if (typeof name !== 'string' || name.includes('\0')) throw new Error('rejected');
  return dns.promises.resolve('example.com');
}

module.exports = { lookup };
