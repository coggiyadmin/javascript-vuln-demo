const express = require('express');
const util = require('util');
const app = express();
app.get('/greet', (req, res) => {
  res.send(util.format('Hello %s', String(req.query.name || '')));
});
