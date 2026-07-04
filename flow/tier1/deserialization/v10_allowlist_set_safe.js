// v09 guard-in-variable
const ALLOWED = new Set(['{}', '[]']);
function loads(raw) { if (ALLOWED.has(String(raw))) return JSON.parse(String(raw)); }
module.exports = { loads };
