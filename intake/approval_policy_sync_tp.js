/**
 * TP — approval sync clears the required count (CWE-862).
 * CVE-2026-14288 class: approval policy not enforced on sync.
 */
'use strict';

function syncRules(mergeRequest) {
  mergeRequest.approvalsRequired = 0; // SINK CWE-862
  return mergeRequest;
}

module.exports = { syncRules };
