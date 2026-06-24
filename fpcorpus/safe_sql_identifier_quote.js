// FP-target (cognium-dev#163, js) — SQL *identifier* (column) validated against an allowlist
// regex and quoted; the value is bound as a placeholder parameter. Must not be flagged
// sql_injection.
function quoteIdent(id) {
  if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(id)) throw new Error('bad identifier');
  return '"' + id + '"';
}
function byColumn(db, column, value) {
  const col = quoteIdent(column); // identifier validated + quoted
  return db.query('SELECT * FROM items WHERE ' + col + ' = ?', [value]); // value bound as param
}
module.exports = { byColumn };
