/**
 * TP — owner writes a third-party AI setting while the admin lock is ignored (CWE-862).
 * CVE-2026-103515 class.
 */
'use strict';

function updateAmazonQ(group, enabled) {
  group.amazonQEnabled = enabled; // SINK CWE-862
  return group;
}

module.exports = { updateAmazonQ };
