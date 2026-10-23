/**
 * TP — a trailing-star grant matches a longer sibling path (CWE-22).
 * CVE-2026-106071 class: permission wildcard radix over-grants.
 *
 * The request values are passed in from this file. A bare parameter is not
 * a source on the default scan (cognium-dev #292).
 */
'use strict';
const fs = require('fs');
const express = require('express');
const app = express();

function readGranted(grant, userPath) {
  const root = grant.endsWith('*') ? grant.slice(0, -1) : grant;
  if (!String(userPath).startsWith(root)) throw new Error('denied');
  return fs.readFileSync(userPath); // SINK CWE-22
}

app.get('/read', (req, res) => {
  readGranted(req.query.grant, req.query.path);
  res.end('ok');
});

module.exports = { readGranted, app };
