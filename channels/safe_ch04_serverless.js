const { execFile } = require('child_process');
function handler(event) {
  const val = String(event?.cmd ?? '');
  if (/^[a-z0-9_-]+$/.test(val)) execFile('echo', [val]);
}
module.exports = { handler };
