// v09 guard-in-variable
const ALLOWED = new Set(['grep', 'cat']);
const { execFile } = require('child_process');
function run(bin, arg) {
  if (ALLOWED.has(bin)) execFile(bin, [arg], () => {});
}
module.exports = { run };
