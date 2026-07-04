// v10 allowlist-set
const SAFE = new Set(['grep:/var/log/app.log']);
const { execFile } = require('child_process');
function run(cmd, path) {
  if (SAFE.has(`${cmd}:${path}`)) execFile(cmd, [path], () => {});
}
module.exports = { run };
