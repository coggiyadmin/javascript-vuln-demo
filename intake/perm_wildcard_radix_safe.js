/**
 * Safe mirror — boundary-aware prefix, then a fixed file under the root.
 */
'use strict';
const fs = require('fs');
const path = require('path');

function readGranted(grant, userPath) {
  if (String(grant).includes('*')) throw new Error('wildcard grants are rejected');
  const root = path.resolve(grant);
  const full = path.resolve(userPath);
  const prefix = root.endsWith(path.sep) ? root : root + path.sep;
  if (full !== root && !full.startsWith(prefix)) throw new Error('denied');
  return fs.readFileSync(path.join(root, 'readme.txt'));
}

module.exports = { readGranted };
