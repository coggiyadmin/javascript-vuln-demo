/**
 * TP — one random value is captured at load and reused for every caller (CWE-330).
 * CVE-2026-106074 class: randomUUID/randomInt caches saved into snapshots and SEAs.
 */
'use strict';
const crypto = require('crypto');

const reused = crypto.randomUUID(); // SINK CWE-330

function token() {
  return reused;
}

module.exports = { token };
