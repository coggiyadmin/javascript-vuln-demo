const express = require('express');
const app = express();
function companySanitize(v) { return String(v).replace(/[<>]/g, ''); }
app.get('/s', (req, res) => res.send('<h1>' + companySanitize(req.query.q || '') + '</h1>'));
