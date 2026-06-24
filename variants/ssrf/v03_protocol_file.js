// SSRF variant: file:// protocol smuggling, constant scheme + tainted path.
const express = require('express'); const app = express();
app.get('/file', async (req, res) => { const r = await fetch('file://' + req.query.p); res.send(await r.text()); }); // SINK CWE-918 file
