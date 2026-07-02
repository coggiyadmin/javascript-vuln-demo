'use strict';
/** TN — library helper; parameterized query (#169). */
function runQuery(db, sql, params) {
  return db.query(sql, params);
}
module.exports = { runQuery };
