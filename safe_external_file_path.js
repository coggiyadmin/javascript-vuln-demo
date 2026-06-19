'use strict';
// SAFE mirror — external_file_path.js; basename + base-dir confinement. Expect 0.
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const BASE = '/srv/app/public/';

app.get('/read', (req, res) => {
  const leaf = path.basename(req.query.path || '');
  const full = path.resolve(BASE, leaf);
  if (!full.startsWith(path.resolve(BASE))) return res.status(403).end('denied');
  res.end(fs.readFileSync(full));
});
module.exports = app;
