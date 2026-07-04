const sqlite3 = require('sqlite3');
function resolveUser(_, info, id) {
  if (!/^[0-9]+$/.test(String(id))) return null;
  new sqlite3.Database(':memory:').run('SELECT * FROM u WHERE id=?', [id]);
}
module.exports = { resolveUser };
