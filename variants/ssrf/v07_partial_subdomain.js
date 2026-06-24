// SSRF variant: partial host taint — attacker controls subdomain label.
const express = require('express'); const app = express();
app.get('/s', async (req, res) => { const r = await fetch('https://' + req.query.sub + '.example.com/'); res.send(await r.text()); }); // SINK CWE-918 partial-host
