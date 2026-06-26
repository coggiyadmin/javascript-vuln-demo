'use strict';
/** B-tier PAT-PRIV-01 — user flag grants admin role (CWE-269). */
const express = require('express');
const session = require('express-session');
const app = express();
app.use(session({ secret: 'dev' }));
app.get('/elevate', (req, res) => {
  if (req.query.admin === '1') {
    req.session.role = 'admin'; // SINK CWE-269
  }
  res.end('ok');
});
module.exports = app;
