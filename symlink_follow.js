'use strict';
// CWE-59 — Link Following. readFileSync follows a symlink in an attacker-writable dir to a
// sensitive file. (Engine gap.) FN probe.
const express = require('express');
const fs = require('fs');
const app = express();
const UPLOADS = '/var/app/uploads/';

app.get('/cat', (req, res) => {
  const name = req.query.name || '';        // SOURCE
  res.end(fs.readFileSync(UPLOADS + name));  // symlink to /etc/shadow is followed → CWE-59
});
module.exports = app;
