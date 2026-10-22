/**
 * Safe mirror — admin lock rejects the write.
 */
'use strict';

function updateAmazonQ(group) {
  if (group.duoAdminLocked) throw new Error('locked');
  group.amazonQEnabled = false;
  return group;
}

module.exports = { updateAmazonQ };
