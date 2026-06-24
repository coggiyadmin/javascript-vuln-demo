const express = require('express'); const app = express();
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://app.example.com');
  next();
});
module.exports = app;
