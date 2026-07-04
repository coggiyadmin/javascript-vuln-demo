// v10 allowlist-set
const fs = require('fs');
const SAFE = new Set(['/var/log/app.log', '/tmp/safe/out.txt']);
function read(target) { if (SAFE.has(target)) return fs.readFileSync(target, 'utf8'); }
module.exports = { read };
