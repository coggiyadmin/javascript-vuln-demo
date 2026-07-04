// v09 guard-in-variable
const ALLOWED = new Set(['user=%s']);
function fmt(t, v) { if (ALLOWED.has(t)) return t.replace('%s', v); }
module.exports = { fmt };
