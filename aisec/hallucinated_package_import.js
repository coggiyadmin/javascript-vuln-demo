// Provenance/Misinfo (OWASP LLM09) — hallucinated dependency ("slopsquatting" surface).
// AI codegen invents plausible-but-nonexistent packages; an attacker can pre-register the
// name and ship malware. TP: import of a fabricated package.
const retry = require('http-retry-session-autogen'); // SINK (LLM09): fabricated dependency
async function fetchUrl(url) { return retry.build({ retries: 3 }).get(url); }
module.exports = { fetchUrl };
