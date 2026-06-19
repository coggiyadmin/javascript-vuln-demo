'use strict';
// CWE-276 — Incorrect Default Permissions. A file is made world-writable (0777). NO finding = FN.
const express = require('express');
const fs = require('fs');
const app = express();

app.post('/save', express.urlencoded({ extended: false }), (req, res) => {
  const path = '/var/app/data/output.txt';
  fs.writeFileSync(path, req.body.data);
  fs.chmodSync(path, 0o777);   // world-writable/readable → CWE-276
  res.end('saved');
});
module.exports = app;
