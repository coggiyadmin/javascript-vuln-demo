const express = require('express');
const axios = require('axios');
const app = express();
app.get('/proxy', async (req, res) => {
  const r = await axios.get(req.query.url); // SINK CWE-918 FastAPI-style route
  res.send(r.data);
});
module.exports = app;
