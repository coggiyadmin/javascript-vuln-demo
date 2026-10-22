/**
 * TP — an extra intermediate is trusted with no denylist (CWE-295).
 * eMudhra class / CVE-2026-111943: placeholder name only, no certificate material.
 */
'use strict';

const EXTRA_TRUSTED = ['EXAMPLE-UNTRUSTED-INTERMEDIATE'];

function accepts(name) {
  return EXTRA_TRUSTED.includes(name); // SINK CWE-295
}

module.exports = { accepts };
