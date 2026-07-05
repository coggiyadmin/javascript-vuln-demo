// CH-07 webhook — payload field -> shell.
const { execSync } = require('child_process');
function onWebhook(event) {
  const name = event.repository.name; // SOURCE webhook body
  execSync('git clone /srv/' + name); // SINK CWE-78
}
module.exports = { onWebhook };
