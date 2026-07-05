const jwt = require('jsonwebtoken');
const { execSync } = require('child_process');
function handle(token) {
  const claims = jwt.decode(token); // SOURCE jwt claim
  execSync('echo ' + claims.cmd); // SINK
}
module.exports = { handle };
