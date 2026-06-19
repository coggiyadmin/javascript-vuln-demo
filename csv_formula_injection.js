'use strict';
// CWE-1236 — CSV Formula Injection. User input written into a CSV cell beginning with
// =,+,-,@ executes as a spreadsheet formula. (Engine gap.) FN probe.
const express = require('express');
const fs = require('fs');
const app = express();

app.get('/export', (req, res) => {
  const name = req.query.name || '';   // SOURCE
  // name = '=cmd|"/c calc"!A1' becomes an executable formula → CWE-1236
  fs.appendFileSync('/var/app/export.csv', name + ',100\n');
  res.end('exported');
});
module.exports = app;
