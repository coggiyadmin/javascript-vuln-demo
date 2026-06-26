/**
 * TP — system metrics helper shells out with user flags (CWE-78 intake pattern).
 * CVE-2021-21315 class: npm systeminformation-style OS command injection.
 */
'use strict';
const express = require('express');
const { exec } = require('child_process');
const app = express();

app.get('/api/os', (req, res) => {
  exec('uname ' + req.query.flags, (err, stdout) => { // SINK CWE-78
    if (err) return res.status(500).end();
    res.send(stdout);
  });
});

module.exports = app;
