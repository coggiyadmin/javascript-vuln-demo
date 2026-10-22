/**
 * Safe mirror — lock rejects the grant.
 */
'use strict';

function accept(group, user) {
  if (group.membershipLocked) throw new Error('membership locked');
  return group.addMember(user);
}

module.exports = { accept };
