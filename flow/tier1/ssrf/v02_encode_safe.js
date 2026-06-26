const express = require('express');
const app = express();
app.get('/f', async (req, res) => {
  const url = String(req.query.url || '').replace('169.254.', '');
  const r = await fetch(url); res.send(await r.text());
});
