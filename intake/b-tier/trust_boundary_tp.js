'use strict';
/** B-tier PAT-TRUST-01 — client-supplied role stored in session (CWE-501). */
const express = require('express');
const session = require('express-session');
const app = express();
app.use(session({ secret: 'dev' }));
app.get('/role', (req, res) => {
  req.session.role = req.query.role; // SINK CWE-501
  res.end('ok');
});
module.exports = app;
