// Provenance/Misinfo (OWASP LLM09) — fabricated API usage. AI calls a method that does not
// exist on the real library, stated confidently. TP: invented-API fingerprint + break risk.
const crypto = require('crypto');
function secureToken(seed) {
  // SINK (LLM09): crypto hash has no .secureDigest() — hallucinated API presented as real
  return crypto.createHash('sha256').update(seed).secureDigest('hex');
}
module.exports = { secureToken };
