const { execSync } = require('child_process');
async function handle(client, key) {
  const v = await client.get(key); // SOURCE cache read (second-order)
  execSync('echo ' + v); // SINK
}
module.exports = { handle };
