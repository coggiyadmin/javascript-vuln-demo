// Cmdi variant: execFile with shell-expanded single string (non-array misuse).
const express = require('express'); const { execFile } = require('child_process'); const app = express();
app.get('/r', (req, res) => {
  execFile('/bin/sh', ['-c', req.query.script], (e, o) => res.send(o)); // SINK CWE-78
});
