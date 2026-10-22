/**
 * Safe mirror — reject a non-confined name, then read a fixed file.
 * The user path is not passed to the filesystem.
 */
'use strict';
const fs = require('fs');
const path = require('path');

function readGranted(root, userPath) {
  if (typeof userPath !== 'string' || userPath.includes('..') || path.isAbsolute(userPath)) {
    throw new Error('denied');
  }
  return fs.readFileSync('/srv/app/readme.txt');
}

module.exports = { readGranted };
