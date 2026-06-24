// Cmdi variant: execSync template literal.
const express = require('express'); const { execSync } = require('child_process'); const app = express();
app.get('/r', (req, res) => { const out = execSync(`ping -c1 ${req.query.host}`); res.send(out); }); // SINK CWE-78
