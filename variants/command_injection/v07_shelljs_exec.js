// Cmdi variant: shelljs.exec — shell helper library.
const express = require('express'); const shell = require('shelljs'); const app = express();
app.get('/r', (req, res) => { const out = shell.exec('ls ' + req.query.dir); res.send(out.stdout); }); // SINK CWE-78 shelljs
