/**
 * Safe mirror — fixed pattern; caller text is data.
 */
'use strict';

function compile(text) {
  if (typeof text !== 'string' || text.length > 64) throw new Error('rejected');
  return /^[a-z0-9]+$/.test(text);
}

module.exports = { compile };
