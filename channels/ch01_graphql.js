const sqlite3 = require('sqlite3');
function resolveUser(_, { id }) {
  const q = id;
  new sqlite3.Database(':memory:').all("SELECT * FROM u WHERE id='" + q + "'");
}
module.exports = { resolveUser };
