// TN — webhook field allowlisted, argv form.
const { execFileSync } = require('child_process');
function onWebhook(event) {
  const name = event.repository.name;
  if (!/^[A-Za-z0-9_-]+$/.test(name)) return;
  execFileSync('git', ['clone', '/srv/' + name]);
}
module.exports = { onWebhook };
