// SSRF variant: gopher:// protocol smuggling.
const express = require('express'); const app = express();
app.get('/g', async (req, res) => { const r = await fetch('gopher://' + req.query.h); res.send(await r.text()); }); // SINK CWE-918 gopher
