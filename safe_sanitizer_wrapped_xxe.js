'use strict';
const express = require('express'); const app = express();
app.post('/wrapped', express.raw({ type: '*/*' }), (req, res) => { res.end('ok'); });
module.exports = app;
