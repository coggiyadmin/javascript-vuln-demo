/**
 * TP — resolves a caller-supplied name without rejecting a NUL (CWE-158).
 * CVE-2026-105482 class: dns.resolve truncates at a NUL.
 */
'use strict';
const dns = require('dns');

function lookup(name) {
  return dns.promises.resolve(name); // SINK CWE-158
}

module.exports = { lookup };
