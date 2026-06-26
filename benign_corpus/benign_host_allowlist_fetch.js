'use strict';
const http = require('http');
const ALLOWED = new Set(['api.internal.example.com']);
function fetchUrl(url) {
  const host = new URL(url).hostname;
  if (!ALLOWED.has(host)) throw new Error('host not allowed');
  return new Promise((resolve, reject) => http.get(url, res => { let b=''; res.on('data',d=>b+=d); res.on('end',()=>resolve(b)); }).on('error', reject));
}
module.exports = { fetchUrl };
