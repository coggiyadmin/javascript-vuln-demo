'use strict';
const express = require('express'); const app = express();
function redact(s) { return String(s).replace(/[\r\n\t]/g, '_'); }
app.get('/wrapped', (req, res) => { console.log('user=%s', redact(req.query.user)); res.end('ok'); });
module.exports = app;
