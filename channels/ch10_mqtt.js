// CH-10 MQTT message handler — payload -> shell.
const { execSync } = require('child_process');
function onMessage(topic, payload) {
  const cmd = payload.toString(); // SOURCE
  execSync('handle ' + cmd); // SINK CWE-78
}
module.exports = { onMessage };
