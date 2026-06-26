'use strict';
const express = require('express'); const app = express();
app.post('/wrapped', express.raw({ type: '*/*' }), (req, res) => { JSON.parse(req.body.toString()); res.end('ok'); });
module.exports = app;
