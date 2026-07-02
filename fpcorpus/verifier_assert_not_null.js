'use strict';
/** FP-target (cognium-ai#109/#123) — assert guard must not become exploitable sqli. */
function lookup(db, userId) {
  if (userId == null) throw new Error('required');
  return db.query('SELECT * FROM u WHERE id=?', [userId]);
}
module.exports = { lookup };
