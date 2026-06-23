// Vector/Embedding Weakness (OWASP LLM08) — untrusted doc embedded into a shared index
// without sanitization (knowledge-base poisoning). TP.
const https = require('https');
const INDEX = [];
function ingest(url) {
  https.get(url, (res) => { let d = ''; res.on('data', c => d += c);
    res.on('end', () => INDEX.push({ text: d, vector: embed(d) })); }); // SINK (LLM08): unsanitized
}
function embed(t) { return t.split(' ').map(w => w.length).slice(0, 512); }
module.exports = { ingest };
