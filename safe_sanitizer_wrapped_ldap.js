'use strict';
const express = require('express'); const app = express();
function checkedUid(uid) { if (!/^[a-zA-Z0-9_-]+$/.test(uid)) throw new Error('bad'); return uid; }
app.get('/wrapped', (req, res) => { checkedUid(String(req.query.uid || '')); res.end('ok'); });
module.exports = app;
