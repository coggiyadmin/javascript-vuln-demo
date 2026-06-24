const express = require('express'); const app = express();
app.use((req, res, next) => {
  res.header('X-Frame-Options', 'DENY');
  res.header('Content-Security-Policy', "frame-ancestors 'none'");
  next();
});
module.exports = app;
