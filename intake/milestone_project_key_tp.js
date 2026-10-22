/**
 * TP — milestone lookup uses a caller-supplied project id (CWE-639).
 * CVE-2026-13319 class: group milestones API user-controlled key.
 */
'use strict';

function milestones(req) {
  return store.find({ projectId: req.query.project_id }); // SINK CWE-639
}

module.exports = { milestones };
