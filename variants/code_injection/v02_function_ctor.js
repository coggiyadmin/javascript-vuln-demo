// Code-injection variant: Function constructor with user source.
const express = require('express'); const app = express();
app.post('/r', (req, res) => { const fn = new Function('return ' + req.body.expr); res.json({ out: fn() }); }); // SINK CWE-94
