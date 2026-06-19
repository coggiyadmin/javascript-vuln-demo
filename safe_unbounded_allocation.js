/**
 * SAFE mirror — unbounded_allocation.js; requested size clamped to a hard limit.
 */
'use strict';
const express = require('express');
const app = express();
const MAX_BYTES = 1 << 20; // 1 MiB cap

app.get('/alloc', (req, res) => {
  const n = parseInt(req.query.n || '0', 10);
  if (n < 0 || n > MAX_BYTES) {           // bounded
    return res.status(400).send('too large');
  }
  const buf = Buffer.alloc(n);
  res.send(String(buf.length));
});
