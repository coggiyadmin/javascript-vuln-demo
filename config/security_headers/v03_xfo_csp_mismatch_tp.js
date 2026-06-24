const express = require('express'); const app = express();
app.use((req, res, next) => {
  res.header('X-Frame-Options', 'DENY');
  res.header('Content-Security-Policy', 'frame-ancestors *'); // SINK CWE-1021
  next();
});
module.exports = app;
