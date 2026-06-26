const express = require('express');
const app = express();
function companySanitize(url) { return String(url).replace('@', ''); }
app.get('/f', async (req, res) => {
  const url = companySanitize(req.query.url || '');
  if (url.includes('169.254')) return res.status(403).end();
  const r = await fetch(url);
  res.send(await r.text());
});
