/**
 * FN probe — CWE-242 Use of Inherently Dangerous Function. `vm.runInNewContext` executes
 * code in the process and is dangerous by design. Real vuln; NO finding = FN.
 */
'use strict';
const express = require('express');
const vm = require('vm');
const app = express();

app.get('/calc', (req, res) => {
  const expr = req.query.e || '1+1';
  const out = vm.runInNewContext(expr);    // inherently dangerous function → CWE-242
  res.send(String(out));
});
