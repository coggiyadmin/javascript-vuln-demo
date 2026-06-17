/**
 * NEGATIVE TEST FILE — safe mirror of preinstall.js supply-chain pattern.
 *
 * The scanner MUST produce ZERO security findings here. Any finding is a
 * FALSE POSITIVE.
 */
'use strict';

// SAFE preinstall — no credential reads, no outbound network calls.
console.log('preinstall: dependency check complete');
