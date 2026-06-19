/**
 * SAFE mirror — exposed_method.js; the privileged action requires an authenticated admin.
 */
'use strict';
const express = require('express');
const { execFileSync } = require('child_process');
const app = express();

function requireAdmin(req, res, next) {
  if (req.get('X-Admin-Token') !== process.env.ADMIN_TOKEN) {
    return res.status(403).send('forbidden');
  }
  next();
}

app.get('/admin/maintenance', requireAdmin, (req, res) => {
  const out = execFileSync('/opt/app/bin/cleanup.sh', []).toString();  // gated by auth
  res.send(out);
});
