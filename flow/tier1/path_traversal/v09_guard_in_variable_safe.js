// v09 guard-in-variable
const fs = require('fs'); const path = require('path');
const ALLOWED = new Set(['/var/log', '/tmp/safe']);
function read(base, name) {
  if (ALLOWED.has(base)) return fs.readFileSync(path.join(base, name), 'utf8');
}
module.exports = { read };
