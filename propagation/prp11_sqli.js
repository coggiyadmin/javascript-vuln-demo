function h(req, res, db) {
  const s = req.query.q; // SOURCE
  const f = () => s; const t = f(); // closure capture
  db.query("SELECT * FROM u WHERE n='" + t + "'"); // SINK
}
module.exports = { h };
