'use strict';
/** Safe mirror — PAT-AUTH-01 */
const express = require('express');
const app = express();
let users = [{ id: 1 }];

app.post('/admin/purge', (req, res) => {
  if (!req.session?.isAdmin) return res.status(403).end();
  users = [];
  res.end('purged');
});
module.exports = app;
