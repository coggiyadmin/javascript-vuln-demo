// TN — SOAP arg parameterized.
function getUser(db, soapArg) {
  return db.query('SELECT * FROM u WHERE id=?', [soapArg]);
}
module.exports = { getUser };
