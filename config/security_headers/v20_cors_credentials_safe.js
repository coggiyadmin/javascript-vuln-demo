const express = require('express');
const app = express();
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://app.example.com'); // literal specific origin
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});
module.exports = app;
