/**
 * NEGATIVE TEST FILE — safe mirror of gyp-loader.js (node-gyp action).
 *
 * The scanner MUST produce ZERO security findings here. Any finding is a
 * FALSE POSITIVE.
 */
'use strict';

// SAFE gyp action — no remote fetch, no dynamic code execution.
process.stdout.write('native build configured\n');
