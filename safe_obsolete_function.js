/**
 * SAFE mirror — obsolete_function.js; uses the modern `Buffer.alloc` replacement.
 */
'use strict';
const express = require('express');
const app = express();

app.get('/buf', (req, res) => {
  const n = parseInt(req.query.n || '8', 10);
  const buf = Buffer.alloc(Math.min(Math.max(n, 0), 1024));  // modern, zero-filled, bounded
  res.send(buf.toString('hex'));
});
