// Excessive Agency (OWASP LLM06) — over-broad filesystem tool rooted at '/', no path jail.
const fs = require('fs');
const path = require('path');
const FS_ROOT = '/'; // SINK (LLM06): whole filesystem in scope
function readTool(rel) { return fs.readFileSync(path.join(FS_ROOT, rel), 'utf8'); }
function writeTool(rel, content) { fs.writeFileSync(path.join(FS_ROOT, rel), content); }
module.exports = { tools: [{ name: 'fs_read', fn: readTool }, { name: 'fs_write', fn: writeTool }] };
