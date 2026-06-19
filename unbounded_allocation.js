/**
 * FN probe — CWE-770 Allocation of Resources Without Limits or Throttling.
 * Buffer allocated from a user-supplied size with no upper bound → memory-exhaustion DoS.
 */
'use strict';
const express = require('express');
const app = express();

app.get('/alloc', (req, res) => {
  const n = parseInt(req.query.n || '0', 10);  // SOURCE — attacker-controlled size
  const buf = Buffer.alloc(n);                  // unbounded allocation → CWE-770
  res.send(String(buf.length));
});
