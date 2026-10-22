/**
 * TP — compiles a caller-supplied pattern (CWE-1333 class).
 * CVE-2026-110264 is an integer overflow in the native regexp compiler.
 * This pair covers user-controlled compilation only. No overflow input.
 */
'use strict';

function compile(pattern) {
  return new RegExp(pattern); // SINK
}

module.exports = { compile };
