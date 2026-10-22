/**
 * TP — permission check uses the path before realpath (CWE-22).
 * CVE-2026-106073 class: fs.realpathSync bypasses the permission model.
 */
'use strict';
const fs = require('fs');
const path = require('path');

function readGranted(root, userPath) {
  const requested = path.join(root, userPath);
  if (!requested.startsWith(root)) throw new Error('denied');
  return fs.readFileSync(fs.realpathSync(requested)); // SINK CWE-22
}

module.exports = { readGranted };
