const express = require('express'); const fs = require('fs');
const app = express();
app.get('/f', (req, res) => { res.send(fs.readFileSync('/var/data/' + req.query.name)); }); // SINK CWE-22
