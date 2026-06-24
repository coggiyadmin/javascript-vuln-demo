// Code-injection variant: dynamic import() with user-controlled specifier (ESM code load).
const express = require('express'); const app = express();
app.get('/r', async (req, res) => { const mod = await import(req.query.spec); res.json({ ok: !!mod }); }); // SINK dynamic import
