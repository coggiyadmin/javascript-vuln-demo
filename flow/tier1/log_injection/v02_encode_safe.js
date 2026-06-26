# Phase-3 encode mirror
const express = require('express'); const app = express();
app.post('/login', express.urlencoded(), (req, res) => {
  console.log('login user=' + req.body.user);
  res.end();
});
