// v10 allowlist-set — scheme+host Set gate before fetch.
const ALLOWED = new Set(['https://cdn.example.com', 'https://api.example.com']);
const http = require('http');
function fetchUrl(url) {
  if (ALLOWED.has(url.split('?')[0])) return http.get(url);
  return null;
}
module.exports = { fetchUrl };
