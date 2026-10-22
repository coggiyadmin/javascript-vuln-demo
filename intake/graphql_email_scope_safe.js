/**
 * Safe mirror — full api scope required; the address is not returned.
 */
'use strict';

function email(tokenScopes) {
  if (!tokenScopes.includes('api')) throw new Error('scope');
  return null;
}

module.exports = { email };
