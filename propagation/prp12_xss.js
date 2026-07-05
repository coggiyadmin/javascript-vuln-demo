function h(req, res, db) {
  const s = req.query.q; // SOURCE
  global._G = s; const t = global._G; // module global
  res.send('<p>' + t + '</p>'); // SINK
}
module.exports = { h };
