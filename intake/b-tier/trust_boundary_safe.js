'use strict';
/** Safe mirror — PAT-TRUST-01 */
const express = require('express');
const session = require('express-session');
const app = express();
const ALLOWED = new Set(['user', 'viewer']);
app.use(session({ secret: 'dev' }));
app.get('/role', (req, res) => {
  const role = ALLOWED.has(req.query.role) ? req.query.role : 'user';
  req.session.role = role;
  res.end('ok');
});
module.exports = app;
