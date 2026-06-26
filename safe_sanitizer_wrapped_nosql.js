'use strict';
const express = require('express'); const app = express();
function checkedKey(k) { if (!/^[a-zA-Z0-9_-]+$/.test(k)) throw new Error('bad'); return k; }
app.get('/wrapped', (req, res) => { checkedKey(String(req.query.k || '')); res.end('ok'); });
module.exports = app;
