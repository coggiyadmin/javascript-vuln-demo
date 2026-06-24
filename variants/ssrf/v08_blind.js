// SSRF variant: blind — response not returned to caller.
const express = require('express'); const app = express();
app.post('/b', async (req, res) => { await fetch(req.query.cb); res.end('queued'); }); // SINK CWE-918 blind
