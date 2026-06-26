const express = require('express');
const { execFile } = require('child_process');
const app = express();
function companySanitize(x) { return String(x).replace(/[;|&$`]/g, ''); }
app.get('/c', (req, res) => {
  execFile('grep', [companySanitize(req.query.q || ''), '/var/log/app.log'], () => res.end('ok'));
});
