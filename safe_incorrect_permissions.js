'use strict';
// SAFE mirror — incorrect_permissions.js; owner-only permissions (0600). Expect 0.
const express = require('express');
const fs = require('fs');
const app = express();

app.post('/save', express.urlencoded({ extended: false }), (req, res) => {
  const path = '/var/app/data/output.txt';
  fs.writeFileSync(path, req.body.data);
  fs.chmodSync(path, 0o600);   // owner read/write only
  res.end('saved');
});
module.exports = app;
