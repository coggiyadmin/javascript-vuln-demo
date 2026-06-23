// SAFE mirror (OWASP LLM06) — fs tool exposes only constant, pre-vetted paths selected by a
// fixed key match; user input never reaches the read path.
const fs = require('fs');
function readTool(key) {
  let p;
  if (key === 'readme') p = '/var/app/workspace/README.md';
  else if (key === 'config') p = '/var/app/workspace/config.json';
  else throw new Error('not in allowlist');
  return fs.readFileSync(p, 'utf8');
}
module.exports = { tools: [{ name: 'fs_read', fn: readTool }] };
