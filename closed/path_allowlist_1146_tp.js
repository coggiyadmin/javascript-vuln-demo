const fs = require('fs');
const path = require('path');
// cognium-dev#1146 — resolve without an allow-list still reaches readFileSync.
const p = process.argv[2];
const r = path.resolve(p);
fs.readFileSync(r, 'utf-8');
