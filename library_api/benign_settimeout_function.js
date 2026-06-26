'use strict';
// TN — setTimeout with function ref, not string eval. cognium-dev #152.
function schedule(fn) {
  setTimeout(fn, 1000);
}
module.exports = { schedule };
