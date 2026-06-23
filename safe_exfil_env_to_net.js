// SAFE mirror — env secret used locally as an auth header to a first-party host;
// only non-sensitive payload leaves the process. ZERO exfiltration expected.
const https = require('https');

function reportMetrics(payload) {
  const apiKey = process.env.INTERNAL_API_KEY; // local auth use only
  const req = https.request('https://api.internal.example.com/metrics', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}` },
  });
  req.write(JSON.stringify(payload)); // non-sensitive data only
  req.end();
}
module.exports = { reportMetrics };
