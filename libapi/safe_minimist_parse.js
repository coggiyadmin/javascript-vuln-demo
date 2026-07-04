// FP-target (N4 real dep #167) — minimist argv parse, not shell exec.
const minimist = require('minimist');

function parseArgv(argv) {
  return minimist(argv); // real minimist API — not OS exec
}
module.exports = { parseArgv };
