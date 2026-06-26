const express = require('express');
const app = express(); const BASE = 'https://api.internal.example.com/';
app.get('/f', async (req, res) => {
  const r = await fetch(BASE + encodeURIComponent(String(req.query.path || '')));
  res.send(await r.text());
});
