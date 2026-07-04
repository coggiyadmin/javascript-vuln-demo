// v09 guard-in-variable
const ALLOWED = new Set(['//users/user[@id="1"]']);
function query(expr) { if (ALLOWED.has(expr)) return expr; }
module.exports = { query };
