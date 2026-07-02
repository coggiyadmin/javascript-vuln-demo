'use strict';
/** Safe mirror — allowlisted role before session write (CWE-501). */
const express = require('express');
const session = require('express-session');
const app = express();
const ALLOWED = new Set(['user', 'viewer', 'admin']);
app.use(session({ secret: 'dev' }));
app.get('/role', (req, res) => {
  const role = req.query.role;
  if (!ALLOWED.has(role)) return res.status(400).end('bad role');
  req.session.role = role;
  res.end('ok');
});
module.exports = app;
