const express = require('express'); const app = express();
app.get('/f', async (req, res) => {
  const r = await fetch(req.query.url); res.send(await r.text()); // SINK CWE-918
});
