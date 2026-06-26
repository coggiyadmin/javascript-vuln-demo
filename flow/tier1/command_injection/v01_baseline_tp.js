const express = require('express');
const { exec } = require('child_process');
const app = express();
app.get('/c', (req, res) => {
  exec('grep ' + req.query.q + ' /var/log/app.log', () => res.end('ok')); // SINK CWE-78
});
