/**
 * Safe mirror — failure leaves existing rows in place.
 */
'use strict';

function record(finding) {
  try {
    return Vulnerability.create(finding);
  } catch (err) {
    return null;
  }
}

module.exports = { record };
