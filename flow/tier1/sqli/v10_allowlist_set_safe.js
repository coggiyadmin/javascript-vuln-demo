// v10 allowlist-set — bound params after numeric allowlist gate.
const sqlite3 = require('sqlite3');
const SAFE_IDS = new Set([1, 2, 3]);
function lookup(userId) {
  if (SAFE_IDS.has(userId)) {
    new sqlite3.Database(':memory:').all('SELECT * FROM users WHERE id=?', [userId]);
  }
}
module.exports = { lookup };
