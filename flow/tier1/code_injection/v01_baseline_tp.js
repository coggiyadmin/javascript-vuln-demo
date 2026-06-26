const express = require('express'); const app = express();
app.get('/e', (req, res) => { res.send(String(eval(req.query.x))); }); // SINK CWE-94
