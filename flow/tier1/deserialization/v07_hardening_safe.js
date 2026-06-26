const express = require('express');
const app = express();
app.post('/load', express.raw({ type: '*/*', limit: '64kb' }), (req, res) => {
  res.send(JSON.stringify(JSON.parse(req.body.toString())));
});
