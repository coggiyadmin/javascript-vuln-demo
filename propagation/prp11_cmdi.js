function h(req, res) {
  const s = req.query.q; // SOURCE
  const f = () => s; const t = f(); // closure capture
  require('child_process').execSync('grep ' + t); // SINK
}
module.exports = { h };
