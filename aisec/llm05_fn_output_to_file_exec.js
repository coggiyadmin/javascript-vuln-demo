// Improper Output Handling FN (OWASP LLM05) — deferred exec. Model output written to a
// .js file in one step, require()'d/run later in another. Single-flow scanners MISS it.
const fs = require('fs');
const PLUGIN = '/var/app/plugins/generated.js';
function stage(code) { fs.writeFileSync(PLUGIN, code); }   // SOURCE: model output persisted
function activate() { return require(PLUGIN); }            // SINK (LLM05 deferred): later executed
module.exports = { stage, activate };
