/**
 * TP — membership is granted without consulting the instance lock (CWE-862).
 * CVE-2026-16255 class.
 */
'use strict';

function accept(group, user) {
  return group.addMember(user); // SINK CWE-862
}

module.exports = { accept };
