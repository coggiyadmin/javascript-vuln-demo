// SAFE — interface allowlisted, argv form (no shell).
const cp = require('child_process');
const ALLOWED = new Set(['eth0', 'lo', 'en0']);

function networkStats(iface) {
  if (!ALLOWED.has(iface)) throw new Error('bad interface');
  return cp.execFileSync('netstat', ['-I', iface]);   // argv, no shell
}
module.exports = { networkStats };
