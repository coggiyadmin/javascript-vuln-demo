'use strict';
const path = require('path');
const fs = require('fs');
const ROOT = '/data';
function read(name) {
  const full = path.resolve(ROOT, name);
  if (!full.startsWith(path.resolve(ROOT))) throw new Error('path escape');
  return fs.readFileSync(full, 'utf8');
}
module.exports = { read };
