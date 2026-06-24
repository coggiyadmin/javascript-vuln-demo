// SSRF variant: request client (FN target — sink not modeled).
const request = require('request'); const express = require('express'); const app = express();
app.get('/r', (req, res) => { request(req.query.url, () => {}); res.end(); }); // SINK CWE-918 (request)
