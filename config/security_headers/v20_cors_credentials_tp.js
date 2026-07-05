const express = require('express');
const app = express();
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // SINK wildcard origin
  res.header('Access-Control-Allow-Credentials', 'true'); // + credentials
  next();
});
module.exports = app;
