// Code-injection variant: direct eval of request body.
const express = require('express'); const app = express();
app.post('/r', (req, res) => { const out = eval(req.body.code); res.json({ out }); }); // SINK CWE-94 eval
