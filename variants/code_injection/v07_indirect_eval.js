// Code-injection variant: indirect eval via globalThis (0, eval)(x) pattern simplified).
const express = require('express'); const app = express();
app.post('/r', (req, res) => { const indirect = eval; res.json({ out: indirect(req.body.code) }); }); // SINK CWE-94 indirect eval
