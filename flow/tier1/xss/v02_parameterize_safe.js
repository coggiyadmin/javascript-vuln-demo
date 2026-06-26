const express = require('express'); const app = express();
app.get('/s', (req, res) => { res.send('<h1>' + encodeURIComponent(String(req.query.q||'')) + '</h1>'); });
