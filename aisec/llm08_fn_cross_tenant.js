// Vector/Embedding FN (OWASP LLM08) — shared cache keyed only by query, not tenant, so
// private hits cross the boundary. No ACL check at retrieval. MISS.
const CACHE = {};
const INDEX = [];
function retrieve(tenant, query) {
  if (CACHE[query]) return CACHE[query]; // SINK (LLM08 FN): cache key omits tenant
  const hits = INDEX.filter(d => d.tenant === tenant && d.text.includes(query)).map(d => d.text);
  CACHE[query] = hits; return hits;
}
module.exports = { retrieve };
