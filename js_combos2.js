/**
 * Combination matrix — JS remaining cells (#3,5,6,7,9,11,13).
 * Uses eval (code_injection) since exec-from-Express is the separate FN #67.
 * express() app + var-pattern. FN probes must FIRE; #9 is an FP probe.
 */
'use strict';
const express = require('express');
const app = express();

// #3 loop-carried — iterate over a tainted array var
app.post('/c3', (req, res) => { const items = req.body.items; for (const it of items) { eval(it); } res.end(); });

// #5 OOP — field set from input, used in a method
class Job { c = ''; run() { eval(this.c); } }
app.post('/c5', (req, res) => { const j = new Job(); j.c = req.body.c; j.run(); res.end(); });

// #6 wrong-context — encodeURIComponent (xss/ssrf san) before a CODE sink → should FIRE
app.post('/c6', (req, res) => { const u = encodeURIComponent(req.body.u); eval(u); res.end(); });

// #7 fake sanitizer — no-op
function clean(x) { return x; }
app.post('/c7', (req, res) => { const u = clean(req.body.u); eval(u); res.end(); });

// #9 comment/string-literal — sink syntax only in a literal (FP: stay clean)
app.post('/c9', (req, res) => { const ex = "eval(userInput)"; res.send(ex); });

// #11 fan-out — one source → two sinks
app.post('/c11', (req, res) => { const u = req.body.u; eval(u); eval('x=' + u); res.end(); });

// #13 encoded — base64 decode then sink
app.post('/c13', (req, res) => { const c = Buffer.from(req.body.d, 'base64').toString('utf8'); eval(c); res.end(); });

module.exports = app;
