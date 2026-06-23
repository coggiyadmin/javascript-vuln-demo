// Performance anti-patterns: (1) sync I/O blocks the event loop; (2) unbounded
// allocation reads a whole file into memory instead of streaming.
const fs = require('fs');

function processLog(path) {
  const data = fs.readFileSync(path, 'utf8');      // blocking main thread + unbounded alloc
  const rows = data.split('\n').map((l) => l.split(',')); // whole file materialized
  const acc = [];
  for (const r of rows) acc.push(r.concat(r).concat(r));  // excessive allocation
  return acc;
}
module.exports = { processLog };
