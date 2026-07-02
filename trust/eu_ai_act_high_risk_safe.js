'use strict';
function decide(score, approved) {
  if (!approved) return 'pending';
  return score > 0.9 ? 'deny' : 'allow';
}
module.exports = { decide };
