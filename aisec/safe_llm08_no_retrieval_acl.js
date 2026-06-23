// SAFE mirror (OWASP LLM08) — retrieval scoped to the caller's tenant before ranking.
const INDEX = [];
function retrieve(tenant, queryVec, k = 5) {
  return INDEX.filter(d => d.tenant === tenant)
    .map(d => ({ d, s: sim(d.vector, queryVec) }))
    .sort((a, b) => b.s - a.s).slice(0, k).map(x => x.d.text);
}
function sim(a, b) { return a.reduce((s, x, i) => s + x * b[i], 0); }
module.exports = { retrieve };
