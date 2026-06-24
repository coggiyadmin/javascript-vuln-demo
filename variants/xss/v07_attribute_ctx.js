// XSS variant: attribute context (unquoted/quoted attr injection).
const express = require('express'); const app = express();
app.get('/a', (req, res) => { res.send('<a href="' + req.query.u + '">x</a>'); }); // SINK CWE-79 attr
