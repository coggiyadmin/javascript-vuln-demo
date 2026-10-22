/**
 * Safe mirror — project id must belong to the caller. No query is built from it.
 */
'use strict';

function milestones(req, memberProjectIds) {
  const projectId = Number(req.query.project_id);
  if (!memberProjectIds.includes(projectId)) throw new Error('forbidden');
  return { projectId: 1, title: 'group milestone' };
}

module.exports = { milestones };
