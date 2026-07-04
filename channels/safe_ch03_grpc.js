const { execFile } = require('child_process');
function handleRequest(req) {
  execFile('echo', [String(req.payload ?? '')]);
}
module.exports = { handleRequest };
