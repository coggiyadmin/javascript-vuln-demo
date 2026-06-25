/**
 * TP — Metro dev server executes client-supplied shell command (CWE-78 intake pattern).
 * CVE-2025-11953 class: React Native Community CLI / Metro dev server OS command injection.
 */
'use strict';
const express = require('express');
const { exec } = require('child_process');

const app = express();
app.use(express.json());

app.post('/symbolicate', (req, res) => {
  exec(req.body.command, (err, stdout) => { // SINK CWE-78
    if (err) return res.status(500).send(String(err));
    res.send(stdout);
  });
});

module.exports = app;
