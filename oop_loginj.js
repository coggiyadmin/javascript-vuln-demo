'use strict';
// Combination #5 — OOP OBJECT FLOW × LOG INJECTION (CWE-117, JS). Taint stored on
// an instance field, written to a log sink. NO finding = FALSE NEGATIVE.
const express = require('express');
const app = express();

class Audit {
  constructor(actor) { this.actor = actor; }        // field-carried taint
  get who() { return this.actor; }
  recordDirect() { console.log('login by ' + this.actor); }    // 5a -> log sink (CWE-117)
  recordViaGetter() { console.log('logout by ' + this.who); }  // 5b via getter -> sink (CWE-117)
}

app.get('/audit', (req, res) => {
  const a = new Audit(req.query.user);              // SOURCE -> constructor
  a.recordDirect();
  a.recordViaGetter();
  res.end();
});
module.exports = app;
