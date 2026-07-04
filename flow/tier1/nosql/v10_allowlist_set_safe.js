// v10 allowlist-set
const SAFE = new Set([1, 2, 3]);
function lookup(id) { if (SAFE.has(id)) return { id }; }
module.exports = { lookup };
