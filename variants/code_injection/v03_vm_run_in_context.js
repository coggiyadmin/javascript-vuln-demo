// Code-injection variant: vm.runInNewContext with user-controlled code string.
const express = require('express'); const vm = require('vm'); const app = express();
app.post('/r', (req, res) => { const out = vm.runInNewContext(req.body.snippet, {}); res.json({ out }); }); // SINK CWE-94 vm
