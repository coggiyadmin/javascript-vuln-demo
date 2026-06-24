// FP-target (upstream cognium-dev#128/#140) — LIBRARY profile. `where` is caller-supplied, not
// an HTTP entry point; must not be sql_injection under an entry-point gate.
function byFilter(db, where) {
  return db.query('SELECT * FROM items WHERE ' + where); // caller-supplied, not entry point
}
module.exports = { byFilter };
