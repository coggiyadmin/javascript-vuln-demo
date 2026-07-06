// Performance — blocking sync I/O on hot path.
const fs = require('fs');
function handle(reqId) {
  const body = fs.readFileSync('/tmp/' + reqId, 'utf8'); // blocks event loop
  return body.toUpperCase();
}
module.exports = { handle };
