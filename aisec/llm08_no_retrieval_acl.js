// Vector/Embedding Weakness (OWASP LLM08) — retrieval with no tenant filter (cross-tenant). TP.
const INDEX = [];
function retrieve(queryVec, k = 5) {
  // SINK (LLM08): similarity over the whole shared store, no ACL filter
  return INDEX.map(d => ({ d, s: sim(d.vector, queryVec) }))
    .sort((a, b) => b.s - a.s).slice(0, k).map(x => x.d.text);
}
function sim(a, b) { return a.reduce((s, x, i) => s + x * b[i], 0); }
module.exports = { retrieve };
