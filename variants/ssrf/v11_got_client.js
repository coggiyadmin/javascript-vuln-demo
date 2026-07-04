// SSRF variant: got client library (INTAKE-56 N1 depth).
const express = require('express'); const got = require('got');
const app = express();
app.get('/fetch', async (req, res) => {
  const body = await got(req.query.url).text(); // SINK CWE-918 got client
  res.send(body);
});
module.exports = app;
