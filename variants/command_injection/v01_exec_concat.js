// Cmdi variant: child_process.exec with string concatenation.
const express = require('express'); const { exec } = require('child_process'); const app = express();
app.get('/r', (req, res) => { exec('grep ' + req.query.q + ' /var/log/app.log', (e, o) => res.send(o)); }); // SINK CWE-78 exec
