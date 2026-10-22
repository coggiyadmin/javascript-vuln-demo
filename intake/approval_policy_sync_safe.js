/**
 * Safe mirror — required count comes from the policy.
 */
'use strict';

function syncRules(mergeRequest, policy) {
  mergeRequest.approvalsRequired = policy.approvalsRequired;
  return mergeRequest;
}

module.exports = { syncRules };
