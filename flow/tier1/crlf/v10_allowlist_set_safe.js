// v09 guard-in-variable
const ALLOWED = new Set(['text/plain', 'application/json']);
function setCt(v) { if (ALLOWED.has(v)) return `Content-Type: ${v}`; }
module.exports = { setCt };
