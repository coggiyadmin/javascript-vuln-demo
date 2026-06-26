'use strict';
const express = require('express'); const fs = require('fs'); const path = require('path');
const app = express(); const BASE = '/srv/app/data/';
function checkedName(s) { return path.basename(String(s)); }
app.get('/wrapped', (req, res) => { fs.openSync(BASE + checkedName(req.query.name || ''), 'r'); res.end('ok'); });
module.exports = app;
