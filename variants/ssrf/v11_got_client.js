// SSRF variant: got client (FN target — sink not modeled).
const got = require('got'); const express = require('express'); const app = express();
app.get('/g', async (req, res) => { await got(req.query.url); res.end(); }); // SINK CWE-918 (got)
