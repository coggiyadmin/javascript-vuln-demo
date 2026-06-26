'use strict';
/** Safe mirror — PAT-PRIV-01 */
const express = require('express');
const session = require('express-session');
const app = express();
app.use(session({ secret: 'dev' }));
app.get('/elevate', (req, res) => {
  if (!req.session.isStaff) {
    return res.status(403).end('forbidden');
  }
  req.session.role = 'admin';
  res.end('ok');
});
module.exports = app;
