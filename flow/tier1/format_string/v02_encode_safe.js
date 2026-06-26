# Phase-3 encode mirror
const express = require('express'); const app = express();
app.get('/greet', (req, res) => {
  res.send('Hello ' + String(req.query.name || 'guest'));
});
