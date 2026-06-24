// Cmdi variant: spawn with shell:true and user-controlled command string.
const express = require('express'); const { spawn } = require('child_process'); const app = express();
app.get('/r', (req, res) => {
  const child = spawn(req.query.cmd, [], { shell: true }); // SINK CWE-78 spawn+shell
  child.stdout.on('data', d => res.write(d));
});
