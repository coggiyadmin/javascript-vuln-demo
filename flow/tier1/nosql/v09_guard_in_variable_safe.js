// v09 guard-in-variable
const ALLOWED = new Set(['name', 'status']);
function find(col, val) { if (ALLOWED.has(col)) return { [col]: val }; }
module.exports = { find };
