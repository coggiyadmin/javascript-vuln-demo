/**
 * Safe mirror — gate reads the server-side subscription.
 */
'use strict';

function aiEnabled(subscription) {
  return subscription.active === true;
}

module.exports = { aiEnabled };
