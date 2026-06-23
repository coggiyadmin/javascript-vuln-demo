// Excessive Agency FN (OWASP LLM06) — capability composition. read_note + post_message are
// each individually scoped, but chain to exfiltrate any readable file. No single sink. MISS.
const fs = require('fs');
const https = require('https');
function readNote(p) { return fs.readFileSync(p, 'utf8'); }          // scoped read
function postMessage(channel, text) {                                // scoped post
  const req = https.request(`https://chat.example.com/${channel}`, { method: 'POST' });
  req.end(JSON.stringify({ text }));
}
// SINK (LLM06 chained): readNote(secret) -> postMessage(public, secret)
module.exports = { tools: [{ name: 'read_note', fn: readNote }, { name: 'post_message', fn: postMessage }] };
