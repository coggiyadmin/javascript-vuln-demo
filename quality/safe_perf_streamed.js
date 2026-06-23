// SAFE mirror — async streaming, bounded memory, path confined to a base dir.
const fs = require('fs');
const path = require('path');
const readline = require('readline');

const BASE = '/var/log/app';

async function processLog(name, onRow) {
  const resolved = path.resolve(BASE, name);
  if (resolved !== BASE && !resolved.startsWith(BASE + path.sep)) {
    throw new Error('path escapes base');
  }
  const rl = readline.createInterface({ input: fs.createReadStream(resolved) });
  for await (const line of rl) onRow(line.split(',')); // streamed, O(1) memory
}
module.exports = { processLog };
