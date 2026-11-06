const fs = require('fs');
const path = require('path');
// cognium-dev#1146 — a helper that returns only after a multi-root allow-list
// guard is not a path traversal at readFileSync.
const ROOTS = ['/srv/data'];
function assertPathAllowed(p) {
  const r = path.resolve(p);
  if (!ROOTS.some((root) => r === root || r.startsWith(root + path.sep))) {
    throw new Error('path not allowed');
  }
  return r;
}
const requested = process.argv[2];
const safe = assertPathAllowed(requested);
console.log(fs.readFileSync(safe, 'utf-8'));
