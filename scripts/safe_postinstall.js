/**
 * NEGATIVE TEST FILE — safe mirror of postinstall-dropper.js supply-chain pattern.
 *
 * The scanner MUST produce ZERO security findings here. Any finding is a
 * FALSE POSITIVE.
 */
'use strict';

// SAFE postinstall — no TLS disable, no remote fetch, no detached spawn.
console.log('postinstall: install complete');
