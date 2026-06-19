/**
 * SAFE mirror — toctou.js; open atomically with exclusive create (no separate check).
 */
'use strict';
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const BASE = '/var/app/data/';

app.get('/write', (req, res) => {
  const leaf = path.basename(req.query.f || '');
  const fd = fs.openSync(path.join(BASE, leaf), 'wx', 0o600); // atomic open, no TOCTOU
  fs.writeSync(fd, req.query.d || '');
  fs.closeSync(fd);
  res.send('ok');
});
