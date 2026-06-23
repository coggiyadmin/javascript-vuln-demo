// SAFE mirror (OWASP LLM08) — ingestion sanitized, size-bounded, namespaced per tenant.
const INDEX = {};
function ingest(tenant, text) {
  const clean = text.replace(/\x00/g, '').slice(0, 20000);
  (INDEX[tenant] = INDEX[tenant] || []).push({ text: clean, vector: embed(clean) });
}
function embed(t) { return t.split(' ').map(w => w.length).slice(0, 512); }
module.exports = { ingest };
