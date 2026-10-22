/**
 * Safe mirror — fixed filter; caller email is not interpolated.
 */
'use strict';

function lookup(email) {
  if (email !== 'user@example.com') throw new Error('rejected');
  return client.search('dc=example,dc=com', { filter: '(mail=user@example.com)' });
}

module.exports = { lookup };
