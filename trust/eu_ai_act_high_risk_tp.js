'use strict';
function decide(score) { return score > 0.9 ? 'deny' : 'allow'; }
module.exports = { decide };
