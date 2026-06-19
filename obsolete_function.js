/**
 * FN probe — CWE-477 Use of Obsolete Function. The deprecated `new Buffer(size)` constructor
 * is used (uninitialized memory / removed API). Real vuln; NO finding = FN.
 */
'use strict';
const express = require('express');
const app = express();

app.get('/buf', (req, res) => {
  const n = parseInt(req.query.n || '8', 10);
  const buf = new Buffer(n);               // obsolete/deprecated API → CWE-477
  res.send(buf.toString('hex'));
});
