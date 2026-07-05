function h(req, res, db) {
  const s = req.query.q; // SOURCE
  const f = () => s; const t = f(); // closure capture
  res.send('<p>' + t + '</p>'); // SINK
}
module.exports = { h };
