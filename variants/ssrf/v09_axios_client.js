// SSRF variant: different client library (axios) — sink coverage breadth.
const express = require('express'); const axios = require('axios'); const app = express();
app.get('/ax', async (req, res) => { const r = await axios.get(req.query.url); res.send(r.data); }); // SINK CWE-918 axios
