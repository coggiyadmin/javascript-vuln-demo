'use strict';
// CWE-494 — Download of Code Without Integrity Check. A script is fetched and executed with
// no signature/hash verification. (Engine gap — cf #93.) FN probe.
const express = require('express');
const http = require('http');
const { execSync } = require('child_process');
const app = express();

app.get('/self-update', (req, res) => {
  http.get('http://updates.internal/install.sh', (r) => {
    let code = '';
    r.on('data', (d) => (code += d));
    r.on('end', () => { execSync(code); res.end('updated'); }); // executes unverified code → CWE-494
  });
});
module.exports = app;
