// SAFE mirror — allowlisted read-only commands only.
const { execFileSync } = require('child_process');
const ALLOW = new Set(['pwd', 'date']);

function shellTool(command) {
  if (!ALLOW.has(command)) throw new Error('command not allowed');
  return execFileSync(command, { encoding: 'utf8' });
}
module.exports = { shellTool };
