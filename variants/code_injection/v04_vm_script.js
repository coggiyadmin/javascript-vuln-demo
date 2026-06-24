// Code-injection variant: vm.Script compile + run on tainted source.
const express = require('express'); const vm = require('vm'); const app = express();
app.post('/r', (req, res) => { const script = new vm.Script(req.body.src); res.json({ out: script.runInThisContext() }); }); // SINK CWE-94
