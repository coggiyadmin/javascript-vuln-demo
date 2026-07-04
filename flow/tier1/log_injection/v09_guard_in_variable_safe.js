// v09 guard-in-variable
const ALLOWED = new Set(['INFO', 'WARN']);
function log(level, msg) { if (ALLOWED.has(level)) console.log(`[${level}] ${msg}`); }
module.exports = { log };
