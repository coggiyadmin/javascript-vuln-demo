// SSRF variant: decimal/encoded-IP localhost bypass (host fully tainted).
const express = require('express'); const app = express();
app.get('/ip', async (req, res) => { const r = await fetch('http://' + req.query.host + '/'); res.send(await r.text()); }); // SINK CWE-918 ip-encoding
