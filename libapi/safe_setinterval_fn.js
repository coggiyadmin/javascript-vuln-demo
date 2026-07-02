'use strict';
/** TN — setInterval with function ref, not string (#152). */
function schedule(fn) { setInterval(fn, 1000); }
module.exports = { schedule };
