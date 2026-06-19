'use strict';
// SAFE mirror — path_equivalence.js; canonicalize, then enforce extension + base prefix.
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const BASE = '/srv/app/data/';

app.get('/get', (req, res) => {
  const leaf = path.basename(req.query.name || '');
  const full = path.resolve(BASE, leaf);
  if (!full.startsWith(path.resolve(BASE)) || !full.endsWith('.txt')) {
    return res.status(403).end('blocked');
  }
  res.end(fs.readFileSync(full));
});
module.exports = app;
