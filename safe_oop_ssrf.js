'use strict';
// SAFE mirror — oop_ssrf.js; host validated against an allowlist inside the
// object before the request. Expect 0 security findings.
const express = require('express');
const http = require('http');
const app = express();
const ALLOWED = new Set(['api.internal.example.com']);

class Fetcher {
  constructor(url) { this.url = url; }
  checked() {
    const host = new URL(this.url).hostname;
    if (!ALLOWED.has(host)) throw new Error('host not allowed');  // allowlist before sink
    return this.url;
  }
  fetchDirect() { return http.get(this.checked()); }
}

app.get('/fetch', (req, res) => {
  const f = new Fetcher(req.query.url);
  f.fetchDirect();
  res.end();
});
module.exports = app;
