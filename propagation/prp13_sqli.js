function h(req, res, db) {
  const s = req.query.q; // SOURCE
  const t = JSON.parse(JSON.stringify({ v: s })).v; // round-trip
  db.query("SELECT * FROM u WHERE n='" + t + "'"); // SINK
}
module.exports = { h };
