'use strict';
// SAFE mirror — oop_openredirect.js; the tainted target is constrained to a
// relative same-site path before redirect. Expect 0 security findings.
const express = require('express');
const app = express();

class Navigation {
  constructor(url) { this.url = url; }
  safeDest() {
    const u = new URL(this.url, 'http://placeholder.local');
    if (/^https?:/i.test(this.url) || this.url.startsWith('//')) return '/'; // reject absolute/cross-host
    return '/' + u.pathname.replace(/^\/+/, '');
  }
  goDirect(res) { return res.redirect(this.safeDest()); }
}

app.get('/login', (req, res) => {
  const nav = new Navigation(req.query.next);
  nav.goDirect(res);
});
module.exports = app;
