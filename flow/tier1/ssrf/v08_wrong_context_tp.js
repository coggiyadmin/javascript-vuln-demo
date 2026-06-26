const express = require('express');
const app = express();
app.get('/f', async (req, res) => {
  const url = String(req.query.url || '').replace(/&/g, '&amp;');
  const r = await fetch(url);
  res.send(await r.text());
});
