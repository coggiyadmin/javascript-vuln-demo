/**
 * Safe mirror — draw a new value on each call.
 */
'use strict';
const crypto = require('crypto');

function token() {
  return crypto.randomUUID();
}

module.exports = { token };
