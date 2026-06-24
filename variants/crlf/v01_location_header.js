const express = require('express'); const app = express();
app.get('/redir', (req, res) => { res.set('Location', req.query.url); res.send('ok'); }); // SINK CWE-93
