// SSRF variant: cloud-metadata, constant host + tainted PATH (partial taint).
const express = require('express'); const app = express();
app.get('/m', async (req, res) => {
  const r = await fetch('http://169.254.169.254/latest/meta-data/' + req.query.p); // SINK CWE-918 metadata
  res.send(await r.text());
});
