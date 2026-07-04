// v09 guard-in-variable
const ALLOWED = new Set(['dc=example,dc=com']);
function search(base, filt) { if (ALLOWED.has(base)) return base + filt; }
module.exports = { search };
