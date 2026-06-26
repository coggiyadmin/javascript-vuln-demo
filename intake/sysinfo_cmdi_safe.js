/**
 * Safe mirror — execFile with argv array; flags not interpreted by shell.
 */
'use strict';
const express = require('express');
const { execFile } = require('child_process');
const app = express();

app.get('/api/os', (req, res) => {
  execFile('uname', ['-a'], (err, stdout) => {
    if (err) return res.status(500).end();
    res.send(stdout);
  });
});

module.exports = app;
