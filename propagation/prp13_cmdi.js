function h(req, res) {
  const s = req.query.q; // SOURCE
  const t = JSON.parse(JSON.stringify({ v: s })).v; // round-trip
  require('child_process').execSync('grep ' + t); // SINK
}
module.exports = { h };
