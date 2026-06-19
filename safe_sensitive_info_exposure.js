/**
 * SAFE mirror — sensitive_info_exposure.js; secret written to a private, non-served path
 * with owner-only permissions.
 */
'use strict';
const express = require('express');
const fs = require('fs');
const app = express();

app.get('/export-config', (req, res) => {
  const target = '/var/app/private/config.txt';   // not web-accessible
  const fd = fs.openSync(target, 'w', 0o600);
  fs.writeSync(fd, 'API_KEY=' + (process.env.API_KEY || ''));
  fs.closeSync(fd);
  res.send('exported');
});
