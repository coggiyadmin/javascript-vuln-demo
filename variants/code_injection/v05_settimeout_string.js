// Code-injection variant: setTimeout with string handler (legacy implicit eval).
const express = require('express'); const app = express();
app.get('/r', (req, res) => { setTimeout(req.query.handler, 10); res.end('ok'); }); // SINK CWE-94 setTimeout string
