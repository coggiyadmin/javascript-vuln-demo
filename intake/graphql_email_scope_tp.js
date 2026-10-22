/**
 * TP — field returns the incoming email with no scope check (CWE-862).
 * CVE-2026-12664 class.
 */
'use strict';

function email(object) {
  return object.incomingEmail; // SINK CWE-862
}

module.exports = { email };
