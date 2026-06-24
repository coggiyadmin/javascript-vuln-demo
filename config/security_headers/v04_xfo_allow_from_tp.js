const express = require('express'); const app = express();
app.use((req, res, next) => {
  res.header('X-Frame-Options', 'ALLOW-FROM https://evil.example'); // SINK CWE-1021
  next();
});
module.exports = app;
