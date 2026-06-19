'use strict';
// CWE-807 — Reliance on Untrusted Inputs in a Security Decision. A client-supplied header
// is trusted to grant admin access. (Engine gap.) FN probe.
const express = require('express');
const app = express();

app.get('/admin', (req, res) => {
  if (req.headers['x-is-admin'] === 'true') {   // trusts attacker-controllable header → CWE-807
    return res.end('admin panel');
  }
  res.status(403).end('denied');
});
module.exports = app;
