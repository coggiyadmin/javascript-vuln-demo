// CH-09 SOAP operation — arg -> SQL sink.
function getUser(db, soapArg) {
  const uid = soapArg; // SOURCE
  return db.query("SELECT * FROM u WHERE id='" + uid + "'"); // SINK CWE-89
}
module.exports = { getUser };
