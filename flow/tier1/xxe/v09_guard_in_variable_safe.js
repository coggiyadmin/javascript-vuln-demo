// v09 guard-in-variable
const ALLOWED = new Set(['<root/>']);
function parse(raw) { if (ALLOWED.has(String(raw))) return raw; }
module.exports = { parse };
