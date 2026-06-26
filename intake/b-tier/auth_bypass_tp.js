'use strict';
/** B-tier PAT-AUTH-01 — missing auth on destructive admin route (CWE-306). */
const express = require('express');
const app = express();
let users = [{ id: 1 }];

app.post('/admin/purge', (req, res) => {
  users = []; // SINK CWE-306 — no auth check
  res.end('purged');
});
module.exports = app;
