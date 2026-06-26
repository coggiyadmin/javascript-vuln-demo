const express = require('express'); const app = express();
app.get('/s', (req, res) => { res.send('<h1>' + req.query.q + '</h1>'); }); // SINK CWE-79
