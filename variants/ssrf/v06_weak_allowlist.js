// SSRF variant: weak substring allowlist that does NOT prevent SSRF (bypass via subdomain/@).
const express = require('express'); const app = express();
app.get('/w', async (req, res) => {
  const url = req.query.url;
  if (url.includes('trusted.com')) { const r = await fetch(url); res.send(await r.text()); } // SINK CWE-918 weak-check
});
