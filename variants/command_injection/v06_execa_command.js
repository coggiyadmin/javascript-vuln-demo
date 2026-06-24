// Cmdi variant: execa library — popular wrapper around child_process.
const express = require('express'); const execa = require('execa'); const app = express();
app.get('/r', async (req, res) => {
  const { stdout } = await execa.command(req.query.cmd); // SINK CWE-78 execa
  res.send(stdout);
});
