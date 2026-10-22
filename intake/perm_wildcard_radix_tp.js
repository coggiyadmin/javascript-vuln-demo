/**
 * TP — a trailing-star grant matches a longer sibling path (CWE-22).
 * CVE-2026-106071 class: permission wildcard radix over-grants.
 */
'use strict';
const fs = require('fs');

function readGranted(grant, userPath) {
  const root = grant.endsWith('*') ? grant.slice(0, -1) : grant;
  if (!String(userPath).startsWith(root)) throw new Error('denied');
  return fs.readFileSync(userPath); // SINK CWE-22
}

module.exports = { readGranted };
