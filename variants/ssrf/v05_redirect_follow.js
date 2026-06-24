// SSRF variant: redirect-following to internal.
const express = require('express'); const app = express();
app.get('/r', async (req, res) => { const r = await fetch(req.query.url, { redirect: 'follow' }); res.send(await r.text()); }); // SINK CWE-918
