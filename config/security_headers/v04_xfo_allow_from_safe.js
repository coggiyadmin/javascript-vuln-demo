const express = require('express'); const app = express();
app.use((req, res, next) => {
  res.header('Content-Security-Policy', "frame-ancestors 'self'");
  next();
});
module.exports = app;
