/**
 * TP — the error path deletes records it did not create (CWE-460).
 * CVE-2026-112326 class: security-finding cleanup on a thrown exception.
 */
'use strict';

function record(finding) {
  const created = [Vulnerability.create(finding)];
  try {
    throw new Error('sync failed');
  } catch (err) {
    created.forEach((row) => row.destroy()); // SINK CWE-460
  }
}

module.exports = { record };
