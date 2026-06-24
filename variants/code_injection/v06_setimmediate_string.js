// Code-injection variant: setImmediate with string code.
const express = require('express'); const app = express();
app.get('/r', (req, res) => { setImmediate(req.query.job); res.end('ok'); }); // SINK CWE-94
