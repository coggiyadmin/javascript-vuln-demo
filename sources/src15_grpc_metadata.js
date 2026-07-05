const { execSync } = require('child_process');
function handle(call) {
  const cmd = call.metadata.get('x-cmd')[0]; // SOURCE grpc metadata
  execSync('echo ' + cmd); // SINK
}
module.exports = { handle };
