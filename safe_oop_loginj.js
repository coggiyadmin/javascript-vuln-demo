'use strict';
// SAFE mirror — oop_loginj.js; CR/LF stripped before logging. Expect 0 findings.
const express = require('express');
const app = express();

class Audit {
  constructor(actor) { this.actor = actor; }
  clean() { return String(this.actor).replace(/[\r\n]/g, ''); }   // strip CRLF
  recordDirect() { console.log('login by %s', this.clean()); }
}

app.get('/audit', (req, res) => {
  const a = new Audit(req.query.user);
  a.recordDirect();
  res.end();
});
module.exports = app;
