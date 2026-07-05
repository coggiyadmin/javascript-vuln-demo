function h(req, res, db) {
  const s = req.query.q; // SOURCE
  const t = JSON.parse(JSON.stringify({ v: s })).v; // round-trip
  res.send('<p>' + t + '</p>'); // SINK
}
module.exports = { h };
