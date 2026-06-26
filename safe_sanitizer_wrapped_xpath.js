'use strict';
const express = require('express'); const app = express();
function checkedName(n) { if (!/^[a-zA-Z0-9_-]+$/.test(n)) throw new Error('bad'); return n; }
app.get('/wrapped', (req, res) => { checkedName(String(req.query.name || '')); res.end('ok'); });
module.exports = app;
