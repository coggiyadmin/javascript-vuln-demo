# Phase-3 parameterize mirror
const express = require('express'); const app = express();
app.get('/greet', (req, res) => {
  res.send('Hello ' + String(req.query.name || 'guest'));
});
