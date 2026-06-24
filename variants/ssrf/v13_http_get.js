// SSRF variant: node core http.get (FN target — sink not modeled).
const http = require('http'); const express = require('express'); const app = express();
app.get('/h', (req, res) => { http.get(req.query.url, () => {}); res.end(); }); // SINK CWE-918 (http.get)
