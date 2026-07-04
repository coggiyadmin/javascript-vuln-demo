// v09 guard-in-variable — column allowlist in module Set.
const sqlite3 = require('sqlite3');
const ALLOWED_COLS = new Set(['name', 'email']);
function lookup(col, val) {
  if (ALLOWED_COLS.has(col)) {
    new sqlite3.Database(':memory:').all(`SELECT ${col} FROM users WHERE ${col}=?`, [val]);
  }
}
module.exports = { lookup };
