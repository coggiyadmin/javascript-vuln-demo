// TP anchor (CWE-78) for #170 — a REAL OS command exec of untrusted HTTP input. Proves the engine
// fires command_injection on a genuine OS sink, so safe_redis_protocol.js (a RESP protocol verb)
// staying clean is a credited distinction, not an engine blind spot.
const express = require('express');
const { exec } = require('child_process');
const app = express();
app.get('/run', (req, res) => {
  exec(req.query.cmd); // SINK — real OS command execution
});
module.exports = { app };
