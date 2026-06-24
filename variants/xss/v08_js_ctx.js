// XSS variant: JS string context inside <script>.
const express = require('express'); const app = express();
app.get('/j', (req, res) => { res.send('<script>var x="' + req.query.q + '";</script>'); }); // SINK CWE-79 js-ctx
