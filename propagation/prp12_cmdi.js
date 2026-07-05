function h(req, res) {
  const s = req.query.q; // SOURCE
  global._G = s; const t = global._G; // module global
  require('child_process').execSync('grep ' + t); // SINK
}
module.exports = { h };
