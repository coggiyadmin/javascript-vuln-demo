// Cmdi variant: sh -c with tainted argument (shell metacharacters).
const express = require('express'); const { spawn } = require('child_process'); const app = express();
app.get('/r', (req, res) => {
  const child = spawn('sh', ['-c', 'echo ' + req.query.msg]); // SINK CWE-78
  child.stdout.on('data', d => res.send(d));
});
