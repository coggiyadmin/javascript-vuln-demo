function h(req, res, db) {
  const s = req.query.q; // SOURCE
  global._G = s; const t = global._G; // module global
  db.query("SELECT * FROM u WHERE n='" + t + "'"); // SINK
}
module.exports = { h };
