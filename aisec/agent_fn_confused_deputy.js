// Excessive Agency FN (OWASP LLM06) — confused deputy: model-chosen URL fetched with the
// user's ambient privileged token; no host allowlist (SSRF/IDOR via tool). Expected: MISS.
const https = require('https');
const TOKEN = process.env.SERVICE_TOKEN || '';
function fetchTool(url) {
  // SINK (LLM06 confused-deputy)
  return new Promise((resolve) => https.get(url, { headers: { Authorization: `Bearer ${TOKEN}` } },
    r => { let d = ''; r.on('data', c => d += c); r.on('end', () => resolve(d)); }));
}
module.exports = { tools: [{ name: 'fetch', fn: fetchTool }] };
