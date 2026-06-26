const express = require('express'); const fs = require('fs'); const app = express();
app.get('/r', (req, res) => { res.send(fs.readFileSync('/data/' + req.query.p, 'utf8')); }); // SINK
