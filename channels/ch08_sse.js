// CH-08 server-sent events — event data reflected into HTML.
function sse(req, res) {
  const msg = req.query.msg; // SOURCE
  res.write('data: <p>' + msg + '</p>\n\n'); // SINK CWE-79
}
module.exports = { sse };
