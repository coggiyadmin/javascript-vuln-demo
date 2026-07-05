// TN — MQTT payload allowlisted, argv form.
const { execFileSync } = require('child_process');
function onMessage(topic, payload) {
  const cmd = payload.toString();
  if (!/^[a-z_]+$/.test(cmd)) return;
  execFileSync('handle', [cmd]);
}
module.exports = { onMessage };
