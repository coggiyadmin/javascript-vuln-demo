// Z6 benign mirror — axios fetch gated by module-level host allowlist (SSRF FP tax).
const axios = require('axios');
const { URL } = require('url');
const ALLOWED_HOSTS = new Set(['api.internal.example.com', 'cdn.example.com']);

async function fetchSafe(url) {
  const host = new URL(url).hostname;
  if (ALLOWED_HOSTS.has(host)) {
    return (await axios.get(url)).data;
  }
  return null;
}
module.exports = { fetchSafe };
