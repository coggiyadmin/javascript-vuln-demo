// v09 guard-in-variable — host allowlist in module Set.
const { URL } = require('url');
const http = require('http');
const ALLOWED_HOSTS = new Set(['api.internal.example.com']);
function fetchUrl(url) {
  const host = new URL(url).hostname;
  if (ALLOWED_HOSTS.has(host)) return http.get(url);
  return null;
}
module.exports = { fetchUrl };
