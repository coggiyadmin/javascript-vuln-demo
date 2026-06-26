'use strict';
const sqlite3 = require('sqlite3');
function lookup(db, userId) {
  return new Promise((resolve, reject) => {
    db.get('SELECT name FROM users WHERE id = ?', [userId], (err, row) => err ? reject(err) : resolve(row?.name || ''));
  });
}
module.exports = { lookup };
